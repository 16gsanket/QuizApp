import { ConsumeQuestionContext } from "../contexts/QuizContext";
import Options from "./Options";

export default function Question() {
  const { Questions, dispatch, answer } = ConsumeQuestionContext();
  const question = Questions;
  console.log(question);
  console.log(answer);

  return (
    <div>
      <h4>{question.question}</h4>

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

// export default Question;
