//import { React } from " react "
//import styles from "./Task16.module.css"

import { useState } from "react";

export function Task16() {
  const [value, setValue] = useState("");

  function onChange(e){
setValue(e.target.value);
  }
  return <>
  <h2>Выводите каждое введенное значение из поля ввода (input) в заголовке H1.</h2>
  <h1 style={!value ?  {color: "gray"} : null}>{value || "напечайте что-нибудь..."}</h1>
  <input type="text" onChange={onChange}/>
  </>;
}
