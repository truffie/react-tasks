import { useRef } from "react";

export function Task5() {
  const counterRef = useRef(0);

  function increaseCounter() {
    counterRef.current += 1;
    console.log(counterRef.current);
  }

  return (
    <>
      <h2>
        Реализуйте компонент, который отслеживает количество кликов на кнопку с помощью useRef и выводит это число в
        консоль при каждом клике.
      </h2>
      <div>
        <button onClick={increaseCounter}>counter++</button>
      </div>
    </>
  );
}
