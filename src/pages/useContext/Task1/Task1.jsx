import { createContext, useCallback, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'baby', surname: 'old', age: 5 });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}

export function Task1() {
  return (
    <>
      <h2>
        Используйте useContext, чтобы сохранять данные о текущем пользователе в
        одном компоненте, изменять данные в другом. Отобразите эту информацию в
        компоненте, используя контекст
      </h2>
      <div
        style={{
          border: '1px solid black',
          width: '60%',
          height: '250px',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
        }}
      >
        <UserProvider>
          <Editor />
          <UserProfile />
        </UserProvider>
      </div>
    </>
  );
}

function UserProfile() {
  const [user] = useContext(UserContext);
  const { name, surname, age } = user;

  return (
    <div>
      <h1>profile</h1>
      <p>name: {name}</p>
      <p>surname: {surname}</p>
      <p>age: {age}</p>
    </div>
  );
}

function Editor() {
  const [userInfo, setUserInfo] = useContext(UserContext);
  const [localUserInfo, setLocalUserInfo] = useState(userInfo);

  const updateLocalUserInfo = useCallback((e) => {
    setLocalUserInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const saveUserInfo = useCallback(() => {
    setUserInfo(localUserInfo);
  }, [setUserInfo, localUserInfo]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '5px',
      }}
    >
      <h1>Editor</h1>
      <div>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={localUserInfo.name}
          onChange={updateLocalUserInfo}
        />
        <input
          type="text"
          placeholder="name"
          name="surname"
          value={localUserInfo.surname}
          onChange={updateLocalUserInfo}
        />
        <input
          type="text"
          placeholder="name"
          name="age"
          value={localUserInfo.age}
          onChange={updateLocalUserInfo}
        />
      </div>
      <button onClick={saveUserInfo}>Сохранить</button>
    </div>
  );
}
