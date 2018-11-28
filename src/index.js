import React from "react";
import ReactDOM from "react-dom";
import Progress from "./components/progress";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Progress ballon={4} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
