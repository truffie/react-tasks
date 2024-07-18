//import { React } from " react "
//import styles from "./Task.module.css"

import { useState } from "react";

export function Task11() {
  let [value, setValue] = useState("");
  function onChange(e) {
   setValue(e.target.value);
  }
  return (
    <>
    <h2>Отобразить в параграфе значение инпута</h2>
      <input type="text" onChange={onChange} />
      <p>{value}</p>
    </>
  );
}
