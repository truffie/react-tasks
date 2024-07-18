import React from "react";

export function Task1() {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  console.log(arr);
  return (
    <>
      <h2>
        На входе статичный массив чисел. Ваша задача каждое число массива возвести в квадрат и отобразить на странице
      </h2>
      <div>
        {arr.map((el) => (
          <span key={Math.random()}>{el ** 2} </span>
        ))}
      </div>
    </>
  );
}
