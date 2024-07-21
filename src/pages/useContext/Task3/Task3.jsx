import { createContext, useContext } from 'react';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const objWeather = {
    temperature: '25',
    humidity: '80%',
    windSpeed: '50',
  };

  return (
    <WeatherContext.Provider value={objWeather}>
      {children}
    </WeatherContext.Provider>
  );
};
const Component = () => {
  const objWeather = useContext(WeatherContext);

  return (
    <>
      {Object.keys(objWeather).map((el) => (
        <h3>
          {el}:{objWeather[el]}
        </h3>
      ))}
    </>
  );
};
export function Task3() {
  return (
    <>
      <h2>
        Разработайте приложение для отображения текущей погоды. Используйте
        useContext, чтобы хранить информацию о погоде (температура, влажность,
        скорость ветра и т. д.). В компоненте отобразите эту информацию о
        погоде.
      </h2>
      <div>
        <WeatherProvider>
          <Component />
        </WeatherProvider>
      </div>
    </>
  );
}
