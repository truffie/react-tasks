//import { React } from " react "
//import styles from "./Task14.module.css"

import { useState } from "react";

export function Task14() {
  const [isOpen, setIsOpen] = useState(false);

  function onClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <h2>
        Напишите компонент, включающий в себя выезжающее меню из трех параграфов. По нажатию на кнопку "Открыть" меню
        должно отображаться.
      </h2>
      <button onClick={onClick}>{isOpen ? "Закрыть" : "Открыть"}</button>
        {isOpen ? (
          <div>
            <p>first elem</p>
            <p>second elem</p>
            <p>third elem</p>
          </div>
        ) : null}
    </>
  );
}
