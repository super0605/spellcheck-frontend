import React from "react";
import BorderedButton from "../BorderedButton";

interface WelcomeBoxProps {
  setQuizStarted: (bool: boolean) => void;
}

const WelcomeBox = ({ setQuizStarted }: WelcomeBoxProps) => {
  return (
    <div className="start-quiz">
      <h1 className="title">Welcome to Spellchecker App!</h1>
      <p className="desc">You will be able to type a word in a searchbox and click submit. <br/> Get the correctness and suggestions.</p>
      <BorderedButton text="START" onClick={() => setQuizStarted(true)} />
    </div>
  );
}

export default WelcomeBox;
