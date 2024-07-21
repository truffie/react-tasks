import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import { NavBar } from './NavBar';
import { themes } from './pages';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('');

  function showTasksCurrentTheme(theme) {
    setCurrentTheme(theme);
  }

  return (
    <>
      <NavBar updateTheme={showTasksCurrentTheme} />
      {themes[currentTheme] ? (
        <>
          <div className="list">
            {Object.keys(themes[currentTheme]).map((task, index) => (
              <Link to={`/${task}`} key={index} className="actionLink">
                <span> {task} </span>
              </Link>
            ))}
          </div>
          <div className="task">
            <Routes>
              {Object.entries(themes[currentTheme]).map(([task, TaskItem]) => (
                <Route path={`/${task}`} element={<TaskItem />} key={task} />
              ))}
            </Routes>
          </div>
        </>
      ) : null}
    </>
  );
}
