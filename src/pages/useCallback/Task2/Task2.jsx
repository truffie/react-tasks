import { memo, useCallback, useState } from 'react';

const ListItem = memo(({ task, onDelete }) => (
  <p>
    {task} <button onClick={onDelete}>delete</button>
  </p>
));

export function Task2() {
  const [list, setList] = useState(['element 1', 'element 2', 'element 3']);

  const deleteElement = useCallback((currentEl) => {
    setList((oldList) => oldList.filter((el) => el !== currentEl));
  }, []);

  return (
    <>
      <h2>
        Создайте компонент, который отображает список элементов с кнопками
        "Удалить". При нажатии на кнопку элемент должен быть удален из списка.
        Используйте useCallback, чтобы оптимизировать функцию удаления элемента.
      </h2>
      <div>
        {list.map((item) => (
          <ListItem
            key={item}
            task={item}
            onDelete={() => deleteElement(item)}
          />
        ))}
      </div>
    </>
  );
}
