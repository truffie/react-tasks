import { useState } from "react";

export function Task3() {
  const colors = ["beige", "bisque", "cadetblue", "chocolate", "darkcyan", "darkslategray"];
  const [color, setColor] = useState("black");

  function pickColor(e) {
    setColor(e.currentTarget.textContent);
  }

  return (
    <>
      <h2>
        Изменение цвета с использованием useState: Создайте компонент выбора цвета, который позволяет пользователю
        выбирать цвет из списка и отображает цвет выбранного цвета на экране.
      </h2>
      <div>
        <h1 style={{ color: color }}>current color: {color}</h1>
        {colors.map((el) => (
          <button onClick={pickColor}>{el}</button>
        ))}
      </div>
    </>
  );
}
