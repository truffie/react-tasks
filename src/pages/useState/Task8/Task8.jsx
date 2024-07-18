import { useState } from "react";

export function Task8() {
  const [isHidden, setIsHidden] = useState(false);
  function changeVisibilityNav() {
    console.log(isHidden);
    setIsHidden(!isHidden);
  }
  return (
    <>
      <h2>
        Отображение навигации с использованием useState: По нажатию на кнопку “бургер” отображать блок навигации из 4
        параграфов.
      </h2>
      <div style={{ display: "flex", gap: "50px" }}>
        <div style={{ visibility: isHidden ? "hidden" : "visible", display: "flex", gap: "10px" }}>
          <p style={{ border: "2px solid black", borderRadius: "10px", padding: "10px 20px" }}>lorem</p>
          <p style={{ border: "2px solid black", borderRadius: "10px", padding: "10px 20px" }}>lorem ipsum</p>
          <p style={{ border: "2px solid black", borderRadius: "10px", padding: "10px 20px" }}>Lorem, ipsum dolor.</p>
          <p style={{ border: "2px solid black", borderRadius: "10px", padding: "10px 20px" }}>Lorem, ipsum do.</p>
        </div>
        <button style={{ display: "flex", flexDirection: "column", gap: "5px" }} onClick={changeVisibilityNav}>
          <p style={{ width: "20px", height: "2px", backgroundColor: "black" }}></p>
          <p style={{ width: "20px", height: "2px", backgroundColor: "black" }}></p>
          <p style={{ width: "20px", height: "2px", backgroundColor: "black" }}></p>
        </button>
      </div>
    </>
  );
}
