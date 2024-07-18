//import { React } from " react "
//import styles from "./Task13.module.css"

import { useState } from "react";

export function Task13() {
  const [isColored, setIsColored] = useState(false);

  function onClick(e) {
    setIsColored(!isColored);
  }
  return (
    <>
      <h2>
        Создайте кнопку с названием "Добавить цвет". При клике на эту кнопку цвет шрифта заголовка H1 должен измениться.
        При следующем клике цвет должен вернуться в первоначальное состояние. Текст кнопки также должен меняться с
        "Добавить" на "Убрать" при нажатии на саму кнопку.
      </h2>
      <h1 style={isColored ? {color: "red"} : {color: "black"}}>Мой Заголовок</h1>
      <button onClick={onClick}>{isColored ? "Убрать цвет" : "Добавить цвет"}</button>
    </>
  );
}
