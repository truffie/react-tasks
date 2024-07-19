import { useMemo, useState } from "react";

export function Task4() {
  const [value, setValue] = useState("");

  const reverseString = useMemo(() => {
    return value.split("").reverse().join("");
  }, [value]);

  return (
    <>
      <h2>
        Напишите программу, которая принимает строку от пользователя и выводит ее в обратном порядке. Используй хук
        useState для хранения строки и хук useMemo для кэширования результата.
      </h2>
      <div>
        <h2>{reverseString}</h2>
        <input onChange={(e) => setValue(e.target.value)} />
      </div>
    </>
  );
}
