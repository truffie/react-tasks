//import { React } from " react "
//import styles from "./Task18.module.css"

import { useState } from "react";

export function Task18() {
  const rows = ["banana", "apple", "pineapple", "kiwi", "orange", "cat", "dog", "mouse", "bat"];

  const [index, setIndex] = useState(0);

  function onClick() {
    setIndex(Math.floor(Math.random() * rows.length));
  }

  return (
    <>
      <h2>
        Создайте компонент, который при нажатии на кнопку будет показывать случайную строку в заголовке H1. Строки
        хранятся в массиве.
      </h2>
      <h1>{rows[index]}</h1>
      <button onClick={onClick}>go random!</button>
    </>
  );
}
