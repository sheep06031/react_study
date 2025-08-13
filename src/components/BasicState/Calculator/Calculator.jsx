import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState(0);

  const onClickHandler = (e) => {
    const value = e.target.value;
    const lastChar = input.charAt(input.length);

    if (
      (lastChar === "+" || lastChar === "-") &&
      (value === "0" || value === "+" || value === "-")
    ) {
      return;
    }

    if (value === "=") {
      setResult(eval(input));
      setInput("0")
      return;
    }

    if (value === "d") {
      setInput(input.slice(0, -1));
      return;
    }

    if (value === "c") {
      setInput("0");
      setResult("0")
      return;
    }

    if (input === "0" && (value === "+" || value === "-" || value === "=")) {
      return;
    } else {
      setInput(input + value);
      return;
    }
  };

  return (
    <div>
      <h1>입력: {input}</h1>
      <h1>결과: {result}</h1>
      <div>
        <button value={"c"} onClick={onClickHandler}>
          C
        </button>
        <button value={0} onClick={onClickHandler}>
          0
        </button>
        <button value={"d"} onClick={onClickHandler}>
          ←
        </button>
      </div>
      <div>
        <button value={1} onClick={onClickHandler}>
          1
        </button>
        <button value={2} onClick={onClickHandler}>
          2
        </button>
        <button value={3} onClick={onClickHandler}>
          3
        </button>
      </div>
      <div>
        <button value={4} onClick={onClickHandler}>
          4
        </button>
        <button value={5} onClick={onClickHandler}>
          5
        </button>
        <button value={6} onClick={onClickHandler}>
          6
        </button>
      </div>
      <div>
        <button value={7} onClick={onClickHandler}>
          7
        </button>
        <button value={8} onClick={onClickHandler}>
          8
        </button>
        <button value={9} onClick={onClickHandler}>
          9
        </button>
      </div>
      <div>
        <button value={"+"} onClick={onClickHandler}>
          +
        </button>
        <button value={"-"} onClick={onClickHandler}>
          -
        </button>
        <button value={"="} onClick={onClickHandler}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
