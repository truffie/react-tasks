import { useState } from "react";

export function Task2() {
  const [isHidden, setIsHidden] = useState(true);

  function switchIsHidden(e) {
    e.currentTarget.id === "show" ? setIsHidden(false) : setIsHidden(true);
  }

  return (
    <>
      <h2>
        Отображение текста с использованием useState: Создайте компонент, который предоставляет две кнопки: "Показать" и
        "Скрыть". При нажатии на "Показать" отображается текст, а при нажатии на "Скрыть" текст скрывается.
      </h2>
      <div>
        {isHidden ? null : <h1 style={{ color: "burlywood" }}>you are cute</h1>}
        <button id={"show"} onClick={switchIsHidden}>
          show text
        </button>
        <button id={"hide"} onClick={switchIsHidden}>
          hide text
        </button>
      </div>
    </>
  );
}
