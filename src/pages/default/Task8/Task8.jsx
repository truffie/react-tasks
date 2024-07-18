//import { React } from " react "
//import styles from "./Task8.module.css"

export function Task8() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(arr);
  return (
    <>
      <h2>
        Реализуйте компонент, который принимает статичный массив чисел и выводит минимальное и максимальное значения на
        странице.
      </h2>

      <p>{Math.max(...arr)} максимальное</p>
      <p>{Math.min(...arr)} минимальное</p>
    </>
  );
}
