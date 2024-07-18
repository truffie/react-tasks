//import { React } from " react "
//import styles from "./Task20.module.css"

import { useState } from "react";

export function Task20() {
const [value, setValue] = useState({
  inp: "",
  val: "",
});

function onChange(e){
  setValue({...value, inp : e.target.value});
}
function onClick(e){
setValue({...value, val : eval(value["inp"])})
}


  return (
    <>
      <h2>
        Создайте поле ввода, в которое пользователь вводит математическое выражение. По нажатию на кнопку необходимо
        вычислить результат выражения (используйте функцию eval()) и отобразить его в заголовке H1.
      </h2>
      <h1>{value.val}</h1>
      <div className="itemWrapper">
        <input onChange={onChange} type="text" />
        <button onClick={onClick}>показать ответ</button>
      </div>
    </>
  );
}
