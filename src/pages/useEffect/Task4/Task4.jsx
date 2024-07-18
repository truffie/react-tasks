import { useEffect, useState } from "react";

export function Task4() {
  const [currentTime, setCurrentTheme] = useState(new Date().toLocaleTimeString());

  function updateCurrentTime() {
    setCurrentTheme(new Date().toLocaleTimeString());
  }
  useEffect(() => {
    const interval = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(interval);
  },
   [currentTime]);

  return (
    <>
      <h2>
        Таймер с использованием useState и useEffect: Создайте компонент, который отображает текущее время и обновляет
        его каждую секунду
      </h2>
      <div>{currentTime}</div>
    </>
  );
}
