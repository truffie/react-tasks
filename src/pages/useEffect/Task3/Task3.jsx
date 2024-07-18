import { useEffect, useState } from "react";

export function Task3() {
  const [response, setResponse] = useState("");

  async function getData() {
    const data = await fetch("https://api.ipify.org?format=json").then((response) => response.json());
    setResponse(data.ip)
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>
        Запрос к API с использованием useState и useEffect: Создайте компонент, который выполняет запрос к API
        https://api.ipify.org/?format=json и отображает полученные данные в заголовок.
      </h2>
      <div>
        <h1>{response}</h1>
      </div>
    </>
  );
}
