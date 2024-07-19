import { useMemo, useState } from "react";

export function Task2() {
  const [value, setValue] = useState(1);

  function updateValue(e) {
    if (/[0-9]/gi.test(e.target.value) || e.target.value === "") {
      setValue(e.target.value);
    }
  }

  const result = useMemo(() => {
    function calcFactorial(num) {
      if (num <= 1) {
        return 1;
      } else {
        return num * calcFactorial(num - 1);
      }
    }
    return calcFactorial(+value);
  }, [value]);
  return (
    <>
      <h2>
        Разработайте компонент, который выполняет факториал числа при вводе значения в текстовое поле. Используйте
        useMemo, чтобы кэшировать результаты вычислений для разных введенных значений и отображать их без повторных
        вычислений
      </h2>
      <div>
        <h1>factorial: {result}</h1>
        <input type="text" onChange={updateValue} value={value} />
      </div>
    </>
  );
}
