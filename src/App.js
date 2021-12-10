import "./styles.css";
import React from "react";
import { useState } from "react";

var num1 = 1;

export default function App() {
  var [ser, setSer] = useState("");
  var [se, setSe] = useState(0);

  function onSubmit(event) {
    setSer(event.target.value);
  }

  function sizing() {
    num1 = num1 + 2;
    var num2 = num1.toString();
    setSe(num2 + "px");
  }
  function desizing() {
    num1 = num1 - 2;
    var num2 = num1.toString();
    setSe(num2 + "px");
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input onChange={onSubmit}></input>
      <button onClick={sizing}>+</button>
      <button onClick={desizing}>-</button>
      <h1 style={{ fontSize: se }}>{ser}</h1>
    </div>
  );
}
