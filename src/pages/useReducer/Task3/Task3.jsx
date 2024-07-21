import { useReducer } from 'react';

function reduce(prevState, inp) {
  return (prevState = inp.target.value);
}

export function Task3() {
  const [value, dispatch] = useReducer(reduce, '');
  return (
    <>
      <h2>
        Создайте компонент отслеживающий вводимое значение в input. Результат
        отображать в h1
      </h2>
      <div>
        <h1>{value}</h1>
        <input type="text" onChange={(e) => dispatch(e)} />
      </div>
    </>
  );
}
