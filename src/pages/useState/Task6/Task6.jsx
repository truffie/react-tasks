import { useState } from 'react';

export function Task6() {
  const [result, setResult] = useState({
    prev: '',
    current: '',
    action: null,
    result: '',
  });

  const actions = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (isNaN(a / b) ? 'infinity value' : a / b),
  };

  function changeCurrentValue(e) {
    let value = Number(e.target.value);
    if (isNaN(value)) {
      return;
    }

    setResult((prev) => ({
      ...prev,
      current: value,
    }));
  }

  function handleCalcAction(action) {
    if (!isFinite(result.current)) {
      return;
    }
    if (!result.prev) {
      setResult((prev) => ({
        prev: prev.current,
        current: '',
        action,
      }));
    }

    if (result.prev) {
      setResult((prev) => ({
        action,
        prev: prev.result ? prev.result : prev.current,
        result: actions[prev.action](prev.result || prev.prev, prev.current),
        current: '',
      }));
    }
  }

  function resetAll() {
    setResult({
      prev: '',
      current: '',
      action: null,
      result: '',
    });
  }

  function showResult() {
    if (isFinite(result.prev) && isFinite(result.current)) {
      setResult((prev) => ({
        ...prev,
        prev: '',
        current: '',
        log: console.log(prev),
        result: actions[prev.action](prev.result || prev.prev, prev.current),
      }));
    }
  }

  return (
    <>
      <h2>
        Создайте компонент простого калькулятора, который выполняет команды: +,
        -, *, /
      </h2>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          margin: '25px',
          padding: '25px 10px',
          border: '2px solid black',
          borderRadius: '15px',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            fontSize: '1.5rem',
          }}
        >
          <input
            type="text"
            placeholder="enter value"
            onChange={changeCurrentValue}
            value={result.current}
            style={{ fontSize: 'inherit', height: '50px' }}
          />
          <h3>result: {result.result}</h3>
          <h4>previous value: {result.prev}</h4>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {Object.keys(actions).map((action, i) => (
            <button
              className="actionLink"
              key={i}
              onClick={() => handleCalcAction(action)}
            >
              {action}
            </button>
          ))}
          <button className="actionLink" onClick={showResult}>
            =
          </button>
          <button className="actionLink" onClick={resetAll}>
            C
          </button>
        </div>
      </div>
    </>
  );
}
