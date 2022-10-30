import React from "react";
import ReactDOM from "react-dom";
import Cont from "./content";
import Cal from "./cal";
import "./index.css";
const App = () => {
  return (
    <div className="contentall">
      <Cont></Cont>
      <Cal></Cal>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
