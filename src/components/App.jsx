import { useEffect, useReducer } from "react";
import Header from "./Header";
import Mainn from "./Mainn";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Error from "./Error";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Timer from "./Timer";
import Footer from "./Footer";
import { ConsumeQuestionContext } from "../contexts/QuizContext";

const SECS_PER_QUESTION = 30;

export default function App() {
  const { status } = ConsumeQuestionContext();

  return (
    <div className="app">
      <Header />

      <Mainn className="main">
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}

        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}

        {status === "finished" && <FinishedScreen />}
      </Mainn>
    </div>
  );
}
