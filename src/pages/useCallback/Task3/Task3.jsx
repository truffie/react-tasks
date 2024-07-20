import { memo, useCallback, useState } from 'react';

const StatusItem = memo(({ status }) => {
  return <h1>{status}</h1>;
});

export function Task3() {
  const [status, setStatus] = useState('inactive');

  const changeStatus = useCallback(() => {
    setStatus((prevStatus) =>
      prevStatus === 'inactive' ? 'active' : 'inactive'
    );
  }, []);

  return (
    <>
      <h2>
        Создайте компонент, который имеет кнопку "Изменить статус". При каждом
        клике на кнопку статус компонента должен меняться между "Активный" и
        "Неактивный". Используйте useCallback, чтобы оптимизировать функцию
        изменения статуса.
      </h2>
      <div>
        <StatusItem status={status} />
        <button onClick={changeStatus}>change status</button>
      </div>
    </>
  );
}
