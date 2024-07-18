 //import { React } from " react "
 //import styles from "./Task17.module.css"

import { useState } from "react"

export function Task17() {

  const [value, setValue] = useState({
    name : "",
    surname : "",
  })

  function onChange(e){
    
    setValue({...value, [e.target.name] : e.target.value})
  }
  function show(){
    console.log(value);
  }
return (
 <>
<h2> Напишите компонент, который будет получать значения из двух полей ввода (input) и выводить их в консоль по нажатию на кнопку. Используйте для этого только один useState.</h2>
<div className="task17">
  
    <input type="text" name="name" onChange={onChange} placeholder="enter name"/>
    <input type="text" name="surname" onChange={onChange} placeholder="enter surname"/>
    <button onClick={show}>log info in console</button>
</div>
 </>
)
}