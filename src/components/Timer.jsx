import { useEffect } from "react";
import { ConsumeQuestionContext } from "../contexts/QuizContext";

function Timer() {
  const { dispatch, time_remaining } = ConsumeQuestionContext();

  const mins = Math.floor(time_remaining / 60);
  const seconds = time_remaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 500);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
