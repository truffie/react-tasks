import { useState } from "react";

export function Task6() {
  const [result, setResult] = useState({
    prev: "",
    current: "",
    action: null,
    result: "",
  });

  const actions = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  function changeCurrentValue(e) {
    let value = e.target.value;

    if (isNaN(+value)) {
      return;
    }

    setResult((prev) => ({
      ...prev,
      result: prev.result && prev.prev ? prev.result : "",
      current: +value,
    }));
  }

  function handleCalcAction(action) {
    if (!result.current && typeof result.current === "string") {
      return;
    }
    if (!result.prev && typeof result.current !== "string") {
      setResult((prev) => ({
        prev: prev.current,
        current: "",
        action,
      }));
    }

    if (result.prev && typeof result.current !== "string") {
      setResult((prev) => ({
        action,
        result: prev.result
          ? actions[prev.action](prev.result, prev.current)
          : actions[prev.action](prev.prev, prev.current),
        prev: prev.result ? prev.result : prev.current,
        current: "",
      }));
    }
  }

  function resetAll() {
    setResult({
      prev: "",
      current: "",
      action: null,
      result: "",
    });
  }

  function showResult() {
    if (!isNaN(result.prev) && !isNaN(result.current)) {
      setResult((prev) => ({
        ...prev,
        prev: "",
        current: "",
        result: prev.result
          ? actions[prev.action](prev.result, prev.current)
          : actions[prev.action](prev.prev, prev.current),
      }));
    }
  }

  return (
    <>
      <h2>Создайте компонент простого калькулятора, который выполняет команды: +, -, *, /</h2>

      <div>
        <h3>result: {result.result}</h3>
        <h4>prev value: {result.prev}</h4>
        <input type="text" placeholder="enter value" onChange={changeCurrentValue} value={result.current} />
        <div style={{ display: "flex", gap: "10px" }}>
          {Object.keys(actions).map((action, i) => (
            <button key={i} onClick={() => handleCalcAction(action)}>
              {action}
            </button>
          ))}
          <button onClick={showResult}>=</button>
          <button onClick={resetAll}>C</button>
        </div>
      </div>
    </>
  );
}
