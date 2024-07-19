import { useRef } from "react";

export function Task1() {
  const ref = useRef(null);

  function onClick() {
    ref.current.style.color = "red";
  }
  return (
    <>
      <h2>Создайте компонент, который по клику на кнопку меняет цвет текста на красный</h2>
      <div>
        <h1 ref={ref}>example text</h1>
        <button onClick={onClick}>change color text</button>
      </div>
    </>
  );
}
