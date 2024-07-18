 //import { React } from " react "
 //import styles from "./Task9.module.css"

export function Task9() {
  const arr = ["baba","kebab","pomidor","bolwoipomidor"]
    console.log(arr);
return (
 <>
  <h2>Создайте компонент, который принимает массив строк и фильтрует строки,
оставляя только те, длина которых не превышает 10 символов</h2>

  {arr.map((el) => el.length < 10 && <p  key={Math.random()}>{el}</p>)}
 </>
)
}