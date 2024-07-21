import { useReducer } from 'react';

function reduce(prevState, color) {
  return (prevState = color);
}
  
export function Task4() {
  const colors = ['red', 'blue', 'purple', 'pink'];

  const [color, dispatch] = useReducer(reduce, 'black');

  return (
    <>
      <h2>
        Вам предоставлен массив цветов, таких как red, blue, purple, pink. При
        клике на кнопку ваша задача изменить цвет заголовка на цвет,
        соответствующий нажатой кнопке
      </h2>
      <div>
        <h1 style={{ color: color }}>this is my header!</h1>
        <div>
          {colors.map((color) => (
            <button onClick={() => dispatch(color)}>{color}</button>
          ))}
        </div>
      </div>
    </>
  );
}
