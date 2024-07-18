import { useState } from "react";

export function Task9() {
  const [answer, setAnswer] = useState("");

  async function getAnswer() {
    const { answer } = await fetch("https://yesno.wtf/api").then((response) => response.json());
    setAnswer(answer);
  }
  return (
    <>
      <h2>
        Форма с отправкой запроса к API с использованием useState: Создайте компонент, который предоставляет input,
        button. После ввода данных в input по нажатию кнопку необходимо отправлять асинхронный запрос к API
        https://yesno.wtf/api с получением рандомно сгенерированного “да/нет”. Отобразить результат в заголовок. Таким
        образом у вас получается игра в предсказателя: где пользователь вводит вопрос в input, а далее получает ответ на
        заданный вопрос
      </h2>
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ textAlign: "center" }}>{answer}</h1>
          <input placeholder="yes/no question" />
        </div>
        <button onClick={getAnswer}>yes or no</button>
      </div>
    </>
  );
}
