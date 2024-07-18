//import { React } from "react"
//import style from "./Task1.module.css"

import { useEffect, useState } from "react";

export function Task1() {
  const [value, setValue] = useState("");

  function changeValue(e) {
    setValue(e.target.value);
  }
  useEffect(() => console.log(value), [value]);

  return (
    <>
      <h2>
        Форма ввода с использованием useState и useEffect: Создайте компонент React, который содержит форму с полем
        ввода. Используйте хук useState для хранения значения введенного текста и хук useEffect для отслеживания
        изменений этого значения. При каждом изменении значения в поле ввода, выводить его в консоль с помощью
        useEffect.
      </h2>
      <div>
        <h1>{value}</h1>
        <input onChange={changeValue} value={value} />
      </div>
    </>
  );
}
