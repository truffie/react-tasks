import { useEffect, useState } from "react";

export function Task2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);
  return (
    <>
      <h2>
        Счетчик с использованием useState и useEffect: Создайте компонент счетчика, который увеличивает значение
        счетчика на 1 каждую секунду с использованием useEffect.
      </h2>
      <div>{count}</div>
    </>
  );
}
