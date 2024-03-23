import { ConsumeQuestionContext } from "../contexts/QuizContext";

function FinishedScreen() {
  const { points, maxPossiblePoints, high_score, dispatch } =
    ConsumeQuestionContext();
  console.log("points: ", points, "high_score ", high_score);

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "💥";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🔥";
  if (percentage >= 20 && percentage < 50) emoji = "😀";
  if (percentage < 20) emoji = "😔";

  return (
    <>
      <p className="result">
        Your scored <strong>{points} </strong>
        out of {maxPossiblePoints}({Math.ceil(percentage)}%) {emoji}
      </p>
      <p className="highscore">HighScore: {high_score} points</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
