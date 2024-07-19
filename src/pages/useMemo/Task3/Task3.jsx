import { useMemo, useState } from "react";

export function Task3() {
  const [value, setValue] = useState(1);
  function updateValue(e) {
    setValue(+e.target.value);
  }

  const result = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= value; i++) {
      sum += i;
    }
    return sum;
  }, [value]);

  return (
    <>
      <h2>
        Создайте компонент для отображения суммы от 1 до N, где N - число, введенное пользователем с клавиатуры.
        Используйте useMemo, чтобы вычислить сумму списка чисел только при изменении N.
      </h2>
      <div>
        <h1>{result}</h1>
        <input type="text" placeholder="enter number" onChange={updateValue} value={value || ""} />
      </div>
    </>
  );
}
