//import { React } from " react "

export function Task5() {
  const arr = [1, 2, "sdf", "ad", "vam", 132, 55];
  console.log(arr);
  return (
    <>
      <h2>
        На входе статичный массив чисел и букв. Ваша задача отобразить на странице в случае числа четность и нечетность
        текущего значения в параграфе, в случае строки отобразить саму строку в параграфе
      </h2>

      {arr.map(
        (el) =>
          (typeof el === "number" && <p key={Math.random()}>{`${el}: ${el % 2 === 0 ? "even" : "odd"}`}</p>) ||
          (typeof el === "string" && <p key={Math.random()}>{el}</p>)
      )}
    </>
  );
}
