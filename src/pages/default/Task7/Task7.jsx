//import { React } from " react "

export function Task7() {
  const arr = [1, 2, 3, 4, -5, -6, -7];
  console.log(arr);
  return (
    <>
      <h2>
        Создайте компонент, который принимает статичный массив чисел и выводит в параграф информацию о положительности и
        отрицательности числа.
      </h2>
      {arr.map((el) => (el >= 0 ? <p  key={Math.random()}>{el} положительный</p> : <p  key={Math.random()}>{el} отрицательный</p>))}
    </>
  );
}
