//import { React } from " react "

export function Task3() {
  const arr = ["adsf", "sdf1", "af@dfe", "fdsfe3@", "ads@asd", "sdf", ""]
  console.log(arr);
  return (
    <>
      <h2>
        На входе статичный массив строк. Ваша задача отфильтровать и отобразить на странице только те строки, которые
        содержат знак @
      </h2>
      {arr.map((el) => (
       el.includes("@") && <div key={Math.random()}>{el}</div>
      ))}
    </>
  );
}
