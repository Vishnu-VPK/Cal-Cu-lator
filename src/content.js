import React from "react";
import ReactDOM from "react-dom";
import "./content.css";
import cal from "./images/Cal.webp";

const Cont = () => {
  return (
    <div className="main-content">
      <div className="content-header">
        <span>
          <img id="calimg" src={cal} alt="logo"></img>
        </span>
        <span>
          <h2> Calculator</h2>
        </span>
      </div>
    </div>
  );
};
export default Cont;
