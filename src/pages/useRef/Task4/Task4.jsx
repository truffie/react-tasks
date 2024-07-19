import { useRef } from "react";

export function Task4() {
  const inputRef = useRef(null);

  function handleFocus() {
    const inp = inputRef.current;
    if (inp) {
      inp.style.background = "lightblue";
    }
  }

  function handleBlur() {
    const inp = inputRef.current;
    if (inp) {
      inp.style.background = "";
    }
  }

  function handleInputRef(attr) {
    const inp = inputRef.current;
    if (inp) {
      return attr === "focus"
        ? (inp.style.background = "lightblue")
        : attr === "blur"
        ? (inp.style.background = "")
        : "";
    }
  }
  return (
    <>
      <h2>Создайте компонент, который при фокусе на текстовом поле добавляет background (onFocus, onBlur)</h2>
      <div>
        <input
          type="text"
          ref={inputRef}
          onFocus={() => handleInputRef("focus")}
          onBlur={() => handleInputRef("blur")}
        />
      </div>
    </>
  );
}
