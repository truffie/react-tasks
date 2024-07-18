import { useState } from "react";

export function Task1() {
  const [inpValue, setInpValue] = useState("");

  function changeInpValue(e) {
    setInpValue(e.currentTarget.value);
    console.log(inpValue);
  }
  return (
    <>
      <h2>
        Форма с использованием useState: Создайте компонент текстового поля, который позволяет пользователю по изменению
        значения инпута отображать значение в консоль
      </h2>
      <div>
        <input type="text" onChange={changeInpValue} />
      </div>
    </>
  );
}
