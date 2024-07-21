import { useReducer } from 'react';

function reducer(prevState, action) {
  switch (action) {
    case 'increment':
      return (prevState += 1);
    case 'decrement':
      return (prevState -= 1);
    case 'resetValue':
      return (prevState = 0);
    default:
      throw new Error('unknown action:', action);
  }
}

export function Task1() {
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>
        Создайте компонент счетчика, который может увеличивать, уменьшать,
        сбрасывать значение при нажатии на соответствующие кнопки.
      </h2>

      <div>
        <h1>conter: {counter}</h1>
        <button onClick={() => dispatch('increment')}>increment</button>
        <button onClick={() => dispatch('decrement')}>decrement</button>
        <button onClick={() => dispatch('resetValue')}>reset value</button>
      </div>
    </>
  );
}
