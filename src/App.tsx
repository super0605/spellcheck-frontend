import React, { useState } from "react";
import "./assets/css/main.scss"
import SearchBox from "./components/SearchBox";
import WelcomeBox from "./components/WelcomeBox";

const App = () => {
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  return (
    <div className="App">
      {quizStarted && <SearchBox /> }
      {!quizStarted && <WelcomeBox setQuizStarted={setQuizStarted} />}
    </div>
  );
}

export default App;
