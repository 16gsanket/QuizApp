import { createContext, useContext, useEffect, useReducer } from "react";

const SECS_PER_QUESTION = 30;
const initialState = {
  Questions: [],
  //loading , error , ready ,  active , finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  high_score: 0,
  time_remaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "questions":
      return { ...state, Questions: action.payload, status: "ready" };
    case "errorfetchingquestion":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        time_remaining: state.Questions.length * SECS_PER_QUESTION,
      };
    case "newanswer":
      const question = state.Questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        high_score:
          state.points > state.high_score ? state.points : state.high_score,
      };

    case "restart":
      return { ...initialState, status: "ready" };
    case "tick":
      return {
        ...state,
        time_remaining: state.time_remaining - 1,
        status: state.time_remaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("unknown dispatch request");
  }
}

const QuestionContextCreated = createContext();

function QuizContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    status,
    Questions,
    index,
    answer,
    points,
    high_score,
    time_remaining,
  } = state;

  const numQuestions = Questions.length;
  const maxPossiblePoints = Questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => {
        res.json().then((data) => {
          dispatch({ type: "questions", payload: data });
        });
      })
      .catch((err) => {
        dispatch({ type: "errorfetchingquestion" });
      });
  }, []);
  return (
    <QuestionContextCreated.Provider
      value={{
        status,
        Questions,
        index,
        answer,
        points,
        high_score,
        time_remaining,
        dispatch,
        maxPossiblePoints,
        numQuestions,
      }}
    >
      {children}
    </QuestionContextCreated.Provider>
  );
}

function ConsumeQuestionContext() {
  const context = useContext(QuestionContextCreated);
  if (context === undefined) return;
  return context;
}

export { QuizContext, ConsumeQuestionContext };
