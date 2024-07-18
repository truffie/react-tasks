import { useState } from "react";

export function Task7() {
  const [fontSize, setFontSize] = useState(16);

  function handleFontSize(action) {
    action === "inc" ? incFontSize() : decFontSize();
  }
  function incFontSize() {
    setFontSize((prev) => prev + 1);
  }
  function decFontSize() {
    setFontSize((prev) => prev - 1);
  }
  return (
    <>
      <h2>
        Изменение размера шрифта с использованием useState: Создайте компонент, который предоставляет две кнопки:
        "Увеличить" и "Уменьшить". При нажатии на эти кнопки значение font-size изменяется соответствующим образом на
        +/– 1px.
      </h2>
      <div>
        <p style={{ fontSize: `${fontSize}px`, textAlign: "center" }}>example text</p>
        <button onClick={() => handleFontSize("inc")}>Увеличить</button>
        <button onClick={() => handleFontSize("dec")}>Уменьшить</button>
      </div>
    </>
  );
}
