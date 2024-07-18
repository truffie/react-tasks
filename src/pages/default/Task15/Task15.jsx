//import { React } from " react "
//import styles from "./Task15.module.css"

import { useState } from "react";

export function Task15() {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h2> Разработайте компонент, который будет отслеживать количество кликов по кнопке и отображать это число.</h2>
      <button onClick={onClick}>count: {count}</button>
    </>
  );
}
