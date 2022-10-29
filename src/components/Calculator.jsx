import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");
  const [calc, setCalc] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const handleReset = () => {
    setCalc("");
  };
  const handleDelete = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  const handleResult = () => {
    setCalc(eval(calc).toString());
  };

  return (
    <div className="calculator-grid">
      <div className="output current-operand">{calc || "0"}</div>
      <div className="bg">
        <button name="7" onClick={() => updateCalc("7")}>
          7
        </button>
        <button name="8" onClick={() => updateCalc("8")}>
          8
        </button>
        <button name="9" onClick={() => updateCalc("9")}>
          9
        </button>
        <button onClick={handleDelete} id="delete" className="res-del">
          DEL
        </button>
        <button name="4" onClick={() => updateCalc("4")}>
          4
        </button>
        <button name="5" onClick={() => updateCalc("5")}>
          5
        </button>
        <button name="6" onClick={() => updateCalc("6")}>
          6
        </button>
        <button name="+" onClick={() => updateCalc("+")}>
          +
        </button>
        <button name="1" onClick={() => updateCalc("1")}>
          1
        </button>
        <button name="2" onClick={() => updateCalc("2")}>
          2
        </button>
        <button name="3" onClick={() => updateCalc("3")}>
          3
        </button>
        <button name="-" onClick={() => updateCalc("-")}>
          -
        </button>
        <button name="." onClick={() => updateCalc(".")}>
          .
        </button>
        <button name="0" onClick={() => updateCalc("0")}>
          0
        </button>
        <button name="/" onClick={() => updateCalc("/")}>
          /
        </button>
        <button name="*" onClick={() => updateCalc("*")}>
          x
        </button>
        <button onClick={handleReset} id="reset" className="span-two res-del">
          reset
        </button>
        <button
          onClick={handleResult}
          id="result"
          className="span-two equal-to"
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
