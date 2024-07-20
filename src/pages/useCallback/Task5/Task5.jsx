import { useCallback } from 'react';
import { useState } from 'react';

export function Task5() {
  const [arr, setArr] = useState(['elem1', 'elem2', 'elem3']);
  const [inp, setInp] = useState('');

  const deleteElement = useCallback((el) => {
    setArr((prev) => prev.filter((elem) => elem !== el));
  }, []);

  const addElement = useCallback(() => {
    if (inp.trim()) {
      setArr((prevArr) => [...prevArr, inp]);
      setInp('');
    }
  }, [inp]);

  return (
    <>
      <h2>
        Создайте компонент, который позволяет пользователю добавлять и удалять
        элементы из списка. Используйте useCallback, чтобы оптимизировать
        функции добавления и удаления элементов.
      </h2>
      <div>
        <input onChange={(e) => setInp(e.target.value)} value={inp}></input>
        <button onClick={addElement}>Add element</button>
        {arr.map((el) => (
          <p key={el}>
            {el}
            <button onClick={() => deleteElement(el)}>Delete</button>
          </p>
        ))}
      </div>
    </>
  );
}
