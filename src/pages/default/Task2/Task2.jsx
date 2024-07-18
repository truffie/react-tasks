 //import { React } from " react "

export function Task2() {
  const arr = [1,2,3,4,5,6,7,8,9,16,128,256,1024,100,10000]
  console.log(arr);
return (
 <>
<h2>На входе статичный массив чисел. Ваша задача найти корень каждого числа и
отобразить на странице в виде h2</h2>
  {arr.map((el) => (
    <h2 key={Math.random()}>{`${el} : ${Math.sqrt(el)}`}</h2>
  ))}
 </>
)
}