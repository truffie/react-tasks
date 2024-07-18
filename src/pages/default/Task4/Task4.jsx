//import { React } from " react "
import img from "./assets/landing.png";
export function Task4() {
  const arr = ["1", "2", "3", "4"];
  console.log(arr);
  return (
    <>
      <h2>
        На входе статичный массив строк. Ваша задача отобразить на странице все строки массива, а также картинку. Каждая
        итерация будет возвращать &lt;div&gt;    &lt;p&gt;el&lt;/p&gt;   &lt;img/&gt;&lt;/div&gt;
      </h2>
      {arr.map((el) => (
        <div  key={Math.random()}>
          <h1>{el}</h1>
          <img src={img} alt="as" />
        </div>
      ))}
    </>
  );
}
