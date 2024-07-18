//import { React } from " react "
//import styles from "./Task21.module.css"

import { useState } from "react";

export function Task21() {
  const [data, setData] = useState(["first msg","second msg"]);
  const [value, setValue] = useState("");

  function onChange(e) {
    setValue(e.target.value);
  }
  function onClick(e) {
    if(!value){
      return
    }
    setData([...data, value]);
    setValue("");
  }
  function onDelete(e){
    setData(data.filter(el => el !== e.target.id))
  }
  return (
    <>
    <h2>По клику на кнопку Добавить input value должно добавляться в параграф. По клику "Убрать" - убирается одна запись</h2>
      <div className={"itemWrapper"}>
        <input type="text" value={value} onChange={onChange} />
        <button onClick={onClick}>Добавить</button>
      </div>
      <div>
        {data.map((el) => (
          <div key={Math.random()}>
            <p>
              {el} <button id={el} onClick={onDelete}>убрать</button>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
