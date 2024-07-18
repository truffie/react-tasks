import axios from "axios";
import { useEffect, useState } from "react";

export function Task5() {
  const [value, setValue] = useState("");

  useEffect(() => {

    async function fetchRandomNumber(id) {
      const { data } = await axios.get(`http://numbersapi.com/${id}`);
      setValue(data);
    }
    
    fetchRandomNumber(Math.floor(Math.random() * 9999999));
  }, []);

  return (
    <>
      <h2>
        Факты с использованием useState и useEffect: http://numbersapi.com/:id. Создайте компонент React, который при
        первичном рендеринге отправляет запрос к APIс рандомно сгенерированным числом и отображает результат в консоль.
      </h2>
      <h1>{value}</h1>
    </>
  );
}
