//import { React } from " react "
//import styles from "./Task12.module.css"

export function Task12() {
  function onKeyDown(e) {
    console.log(e.key === "Enter" ? e.target.value === e.target.value.split("").reverse().join("") : false) 

  }
  return (
    <>
      <h2>
        По нажатию на enter в input onKeyDown выявлять является ли введенное слово палиндромом. Результат проверки
        отобразить в консоль
      </h2>

      <input type="text" onKeyDown={onKeyDown} />
    </>
  );
}
