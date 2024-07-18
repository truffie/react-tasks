//import { React } from " react "

export function Task10() {
  const arr = [1, 2, 3, 4, "a", "b", "c", "d"];
  return (
    <>
      <h2>
        Создайте компонент, который принимает статичный массив чисел и строк. Если элемент - число, то отобразите его в
        параграфе с зеленым цветом текста, если строка - с синим
      </h2>
      {arr.map((el) =>
        <p key={Math.random()} style= {typeof el === "number" ? { color: "green", fontSize: "2rem" } :{ color: "blue", fontSize: "2rem" }}>{el}</p>
      )}
    </>
  );
}
