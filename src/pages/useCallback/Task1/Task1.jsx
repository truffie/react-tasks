import { useCallback, useState } from "react";

export function Task1() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  return (
    <>
      <h2>
        Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку счетчик должен
        увеличиваться на 1. Используйте useCallback, чтобы оптимизировать обработчик клика на
        кнопке.
      </h2>
      <h1>{counter}</h1>
      <div>
        <button onClick={increment}>increase counter</button>
      </div>
    </>
  );
}
