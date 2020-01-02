import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ViewPanel from "./components/ViewPanel";
import Button from "./components/Button";
import ButtonReset from "./components/ButtonReset";
import ButtonOperation from "./components/ButtonOperation";
import ButtonResult from "./components/ButtonResult";

const App = () => {
  const [number, setNumber] = useState(0);
  const [operator, setOperator] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const handleChangeView = e => {
    if (operator) {
      setNewNumber(newNumber.concat(e.target.innerHTML));
    } else if (!operator && e.target.innerHTML !== false) {
      setNumber(
        number && number.length < 11
          ? number.concat(e.target.innerHTML)
          : e.target.innerHTML
      );
    }
  };
  const handleClickReset = () => {
    setNumber(0);
    setOperator("");
    setNewNumber("");
  };
  const handleClickOperation = e => {
    operator
      ? (handleResult(), setOperator(e.target.innerHTML))
      : setOperator(e.target.innerHTML);
  };
  const handleResult = () => {
    let result;
    switch (operator) {
      case "+":
        result = +number + +newNumber;
        break;
      case "-":
        result = +number - +newNumber;
        break;
      case "*":
        result = +number * +newNumber;
        break;
      case "/":
        result = +number / +newNumber;
        break;
      default:
        console.log("hello");
    }
    setNumber(result.toString());
    setOperator("");
    setNewNumber("");
  };

  return (
    <div className="App">
      <div style={{ width: `320px` }}>
        <ViewPanel result={operator && newNumber.length ? newNumber : number} />
        <div
          style={{
            display: `flex`,
            width: `320px`,
            marginBottom: `.3em`
          }}
        >
          <Button val="1" size="80px" handleClick={handleChangeView} />
          <Button val="2" size="80px" handleClick={handleChangeView} />
          <Button val="3" size="80px" handleClick={handleChangeView} />
          <ButtonOperation
            val="*"
            size="80px"
            handleOperation={handleClickOperation}
          />
        </div>
        <div
          style={{
            display: `flex`,
            width: `320px`,
            marginBottom: `.3em`
          }}
        >
          <Button val="4" size="80px" handleClick={handleChangeView} />
          <Button val="5" size="80px" handleClick={handleChangeView} />
          <Button val="6" size="80px" handleClick={handleChangeView} />
          <ButtonOperation
            val="/"
            size="80px"
            handleOperation={handleClickOperation}
          />
        </div>
        <div
          style={{
            display: `flex`,
            width: `320px`,
            marginBottom: `.3em`
          }}
        >
          <Button val="7" size="80px" handleClick={handleChangeView} />
          <Button val="8" size="80px" handleClick={handleChangeView} />
          <Button val="9" size="80px" handleClick={handleChangeView} />
          <ButtonOperation
            val="+"
            size="80px"
            handleOperation={handleClickOperation}
          />
        </div>
        <div
          style={{
            display: `flex`,
            width: `320px`,
            marginBottom: `.3em`
          }}
        >
          <ButtonReset val="C" size="80px" handleReset={handleClickReset} />
          <Button
            val="0"
            dsbl={number && newNumber ? "" : true}
            size="80px"
            handleClick={handleChangeView}
          />
          <ButtonResult val="=" size="80px" handleCalculate={handleResult} />
          <ButtonOperation
            val="-"
            size="80px"
            handleOperation={handleClickOperation}
          />
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
