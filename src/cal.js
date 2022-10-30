import React from "react";
import ReactDOM from "react-dom";
import "./cal.css";
import "./index.css";
import{useState} from 'react';

const Cal = () => {
  const[calc1,setCalc]=useState("");
  const[result,setResult]=useState("");
  const ops=['/','*','+','-','.'];
  const updateCalc=value=>{
    if(
      ops.includes(value) && calc1==''||
      ops.includes(value) && ops.includes(calc1.slice(-1))
    ){
      return;
    }
    setCalc(calc1+value);
    if(!ops.includes(value)){
      setResult(eval(calc1+value).toString())
    }
  }
  const digitsloop = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(<button onClick={()=>updateCalc(i.toString())}key={i}>{i}</button>);
    }
    return digits;
  };
  const calculate=()=>{
    setCalc(eval(calc1).toString())
  }
  const deletelast=()=>{
    if(calc1==''){
      return;
    }
    const value=calc1.slice(0,-1);
    setCalc(value);
  }
  return (
    <div className="whole">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span>: ''}{calc1 || "0"}
        </div>
        <div className="operators">
          <button onClick={()=>updateCalc('/')}>/</button>
          <button onClick={()=>updateCalc('*')}>*</button>
          <button onClick={()=>updateCalc('+')}>+</button>
          <button onClick={()=>updateCalc('-')}>-</button>
          <button onClick={deletelast}>DEL</button>
        </div>
        <div className="digits">
          
          {digitsloop()}
          <button onClick={()=>updateCalc('0')}>0</button>
          <button onClick={()=>updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};
export default Cal;
