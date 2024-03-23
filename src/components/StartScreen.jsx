import { ConsumeQuestionContext } from "../contexts/QuizContext";

export default function StartScreen() {
  const { numQuestions, dispatch } = ConsumeQuestionContext();

  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets Start
      </button>
    </div>
  );
}
