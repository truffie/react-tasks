//import { React } from " react "
//import styles from "./Task19.module.css"

import { useState } from "react";

export function Task19() {
  const [value, setValue] = useState("пустое значение");

    function onClick(e){
      setValue(e.target.textContent);
    }

  return (
    <>
      <h2>
        У вас есть три кнопки: "О нас", "Цена", "Главная страница". Заголовок H1 должен отображать текст активной
        (нажатой) кнопки. Например, если нажата кнопка "Цена", в заголовке должно отображаться слово "Цена".
      </h2>
      <h1>{value}</h1>
      <div className="itemWrapper">
        <button onClick={onClick}>О нас</button>
        <button onClick={onClick}>Цена</button>
        <button onClick={onClick}>Главная страница</button>
      </div>
    </>
  );
}
