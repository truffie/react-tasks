import { useEffect, useState } from "react";

export function Task4() {
  const [taskList, setTaskList] = useState(["go to sleep", "sleep again"]);
  const [inpTaskValue, setInpTaskValue] = useState("");

  function updateInpValue(e) {
    setInpTaskValue(e.currentTarget.value);
  }

  function addTask() {
    if (inpTaskValue) {
      setTaskList((oldTaskList) => [...oldTaskList, inpTaskValue]);
      setInpTaskValue("");
    }
  }

  function removeTask(i) {
    setTaskList((oldTaskList) => oldTaskList.filter((_, index) => index !== i));
  }

  return (
    <>
      <h2>
        Список задач с использованием useState: Создайте компонент списка задач, который позволяет пользователю
        добавлять и удалять задачи из списка.
      </h2>
      <div>
        <h1>task list</h1>
        {taskList.map((el, i) => (
          <div key={i}>
            <div
              style={{
                borderBottom: "1px solid black",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
                margin: "5px",
                padding: "5px",
                fontWeight: "500",
              }}
            >
              {el}
              <button onClick={() => removeTask(i)} style={{ fontWeight: "400", cursor: "pointer" }}>
                remove task
              </button>
            </div>
          </div>
        ))}
        <input type="text" placeholder="enter task" onChange={updateInpValue} value={inpTaskValue} />
        <button onClick={addTask} id={"add"}>
          add new task
        </button>
      </div>
    </>
  );
}
