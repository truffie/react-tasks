import { useCallback, useEffect, useMemo, useState } from 'react';

const Counter = ({ time }) => {
  console.log('counter re-render');
  return <div>{time}</div>;
};

export function Task4() {
  const [color, setColor] = useState('black');
  const [counter, setCounter] = useState(0);

  const colorList = useMemo(
    () => ['blue', 'red', 'yellow', 'orange', 'purple'],
    []
  );

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(myInterval);
  }, [counter]);

  const changeColor = useCallback((item) => setColor(item), []);

  return (
    <>
      <h2>
        Создайте компонент, который предоставляет пользователю выбор цвета из
        списка. При выборе цвета, компонент должен отображать выбранный цвет на
        странице. Используйте useCallback, чтобы оптимизировать функцию выбора
        цвета.
      </h2>
      <h1 style={{ color: color }}>Выбранный цвет: {color}</h1>
      <Counter time={counter} />
      <div>
        {colorList.map((item) => (
          <button key={item} onClick={() => changeColor(item)}>
            choose {item} color
          </button>
        ))}
      </div>
    </>
  );
}
