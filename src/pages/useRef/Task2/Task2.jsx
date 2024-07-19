import { useRef } from "react";

export function Task2() {
  const header = useRef(null);

  function changeColor() {
    const randomHex = createRandomHex().join("");
    header.current.style.color = `#${randomHex}`;
  }

  function createRandomHex() {
    return [
      Number(Math.floor(Math.random() * 255)).toString(16),
      Number(Math.floor(Math.random() * 255)).toString(16),
      Number(Math.floor(Math.random() * 255)).toString(16),
    ];
  }

  return (
    <>
      <h2>Создайте компонент, который по клику на кнопку рандомно у h1 меняет цвет текста</h2>
      <h1 ref={header}>i'm header</h1>
      <button onClick={changeColor}>random color</button>
    </>
  );
}
