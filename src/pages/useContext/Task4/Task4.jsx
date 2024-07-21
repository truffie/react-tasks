import { createContext, useCallback, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const themes = {
    light: { background: '#FEFFD2', color: '#FF7D29' },
    dark: { background: '#1A3636', color: '#D6BD98' },
  };

  return (
    <ThemeContext.Provider value={{ themes, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function Task4() {
  return (
    <>
      <h2>
        Разработайте простое приложение для переключения между светлой и темной
        темами. Используйте useContext, чтобы хранить информацию о текущей теме
        (светлая или темная). В компоненте отобразите интерфейс, который
        позволяет пользователю переключаться между темами. Передайте стили
        внутрь компонента через пропсы.
      </h2>
      <div style={{ width: '100%', height: '30vh' }}>
        <ThemeProvider>
          <NavTheme />
          <Component style={{ margin: '25px' }} />
          <Component style={{ margin: '25px' }} />
          <Component style={{ margin: '25px' }} />
        </ThemeProvider>
      </div>
    </>
  );
}

const Component = ({ style }) => {
  const { themes, theme } = useContext(ThemeContext);
  return (
    <div style={{ ...themes[theme], ...style, height: '100%' }}>
      <h2>this is my header!</h2>
      <p>random text</p>
      <p>random text</p>
      <p>random text</p>
    </div>
  );
};

const NavTheme = () => {
  const { themes, theme, setTheme } = useContext(ThemeContext);

  const chooseTheme = useCallback(
    (e) => {
      console.log(e.target.textContent);
      setTheme(e.currentTarget.textContent);
    },
    [setTheme]
  );
  return (
    <div
      style={{ ...themes[theme], display: 'flex', justifyContent: 'flex-end' }}
    >
      {Object.keys(themes).map((cur) => (
        <button
          style={{
            ...themes[cur],
            border: 'none',
            borderRadius: '0px',
          }}
          key={cur}
          onClick={chooseTheme}
        >
          {cur}
        </button>
      ))}
    </div>
  );
};
