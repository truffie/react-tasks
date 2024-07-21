import { useReducer } from 'react';

function reduce(prevState) {
  return prevState === 'on' ? 'off' : 'on';
}

export function Task2() {
  const [state, dispatch] = useReducer(reduce, 'on');

  return (
    <>
      <h2>
        Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on»
        и «off». По клику на кнопку текст меняется на противоположный
      </h2>
      <div>
        <button onClick={() => dispatch()}>{state}</button>
      </div>
    </>
  );
}
