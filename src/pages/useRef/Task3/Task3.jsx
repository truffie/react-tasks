import { useRef } from "react";

export function Task3() {
  const header = useRef();
  const fontSizeRef = useRef(2);

  function incFontSize() {
    fontSizeRef.current += 0.25;
    header.current.style.fontSize = `${fontSizeRef.current}rem`;
  }

  return (
    <>
      <h2>
        Создайте компонент, который при каждом клике на кнопку увеличивает размер шрифта текста в элементе на странице
      </h2>
      <div>
        <h1 ref={header}>increase me!</h1>
        <button onClick={incFontSize}>increase</button>
      </div>
    </>
  );
}
