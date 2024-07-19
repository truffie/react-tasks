import { useRef } from "react";

export function Task6() {
  const tooltipRef = useRef(false);

  function handleTooltip(bool) {
    const tooltip = tooltipRef.current;
    if (tooltip) {
      bool ? (tooltip.style.visibility = "visible") : (tooltip.style.visibility = "hidden");
    }
  }

  return (
    <>
      <h2>
        Разработайте компонент для реализации "подсказок" (tooltips). При наведении на элемент интерфейса (например,
        кнопку), компонент отображает подсказку с текстом. (onMouseEnter срабатывает, когда курсор мыши входит в область
        элемента. onMouseLeave срабатывает, когда курсор мыши покидает область элемента.)
      </h2>
      <div>
        <p style={{ visibility: "hidden" }} ref={tooltipRef}>
          формат 4:3
        </p>
        <button onMouseEnter={() => handleTooltip(true)} onMouseLeave={() => handleTooltip(false)}>
          обрезать изображение
        </button>
      </div>
    </>
  );
}
