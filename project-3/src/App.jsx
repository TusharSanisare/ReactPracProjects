import React, { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

const App = () => {
  const [start, setStart] = useState(true);
  const toggleGamePlay = () => {
    if (start) {
      setStart(false);
    } else {
      setStart(true);
    }
  };

  return <>{start ? <GamePlay /> : <StartGame toggel={toggleGamePlay} />}</>;
};

export default App;
