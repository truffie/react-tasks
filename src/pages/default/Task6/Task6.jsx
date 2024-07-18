//import { React } from " react "

export function Task6() {
  const arr = [{ title: "js", description: "language" },{ title: "ts", description: "language" },{ title: "java", description: "language" }];
  console.log(arr);
  return (
    <>
      <h2>
        На входе массив из объектов. каждый объект содержит title с названием фильма и description с кратким описанием
        фильма. В h1 отобразить каждый title, в p - description
      </h2>

      {arr.map((el) =>(
        <div  key={Math.random()}>
        <h1>{el.title}</h1><p>{el.description}</p>
        </div>
      ))}
    </>
  );
}
