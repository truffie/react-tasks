import { useReducer } from 'react';

function reduce(state, action) {
  console.log(state);
  switch (action.type) {
    case 'first': {
      return { ...state, first: +action.value };
    }
    case 'second': {
      return { ...state, second: +action.value };
    }
    case 'sum': {
      console.log(state.first + state.second);
      return state;
    }
    default:
      throw new Error('unknown aciton type:', action.type);
  }
}
export function Task5() {
  const [state, dispatch] = useReducer(reduce, { first: 0, second: 0 });

  return (
    <>
      <h2>
        Создайте компонент отслеживающий вводимое значение 2 input. Посчитать
        сумму 2 input. По клику на кнопку отображать результат в консоль
      </h2>
      <div>
        <input
          type="text"
          onChange={(e) => dispatch({ type: 'first', value: e.target.value })}
        />
        <input
          type="text"
          onChange={(e) => dispatch({ type: 'second', value: e.target.value })}
        />
        <button onClick={() => dispatch({ type: 'sum' })}>
          show result in console
        </button>
      </div>
    </>
  );
}
