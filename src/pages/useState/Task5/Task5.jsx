import { useState } from "react";

export function Task5() {
  const [isValid, setIsValid] = useState(null);
  const [email, setEmail] = useState("");

  function handleEmailChange(e) {
    setEmail(e.currentTarget.value);
    if (!email.length) {
      setIsValid(null);
    }
  }

  function handleValidation() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValid(emailPattern.test(email));
  }

  return (
    <>
      <h2>
        Форма с использованием useState: Создайте компонент текстового поля, который позволяет пользователю вводить
        текст и проверять введенный текст регулярным выражением на почту по нажатию на кнопку. В заголовок отобразить
        true если введенная строка удовлетворяет регулярному выражению и false в противном случае
      </h2>
      <h1 style={{ color: !email || isValid === null ? "black" : isValid ? "green" : "red" }}>
        {email && isValid ? "email passed" : !email || isValid === null ? "enter email" : "enter correct email"}
      </h1>
      <input type="text" placeholder="enter email" value={email} onChange={handleEmailChange} />
      <button onClick={handleValidation}>check email</button>
    </>
  );
}
