import { useState } from 'react';
import { themes } from './pages';
import { Link } from 'react-router-dom';

export function NavBar({ updateTheme }) {
  const typedThemes = Object.keys(themes).reduce((typedTheme, theme) => {
    typedTheme.push({
      value: theme,
      isActive: false,
    });
    return typedTheme;
  }, []);

  const [topics, setTopics] = useState(typedThemes);
  const [isVisible, setIsVisible] = useState(false);

  function handleSetTopic(e) {
    const id = +e.currentTarget.id;

    setTopics((prevTopics) =>
      prevTopics.map((topic, index) => ({
        ...topic,
        isActive: index === id,
      }))
    );

    updateTheme(e.currentTarget.dataset.theme);
  }

  return (
    <div className="menu">
      <h1
        className={isVisible ? 'open' : undefined}
        onClick={() => setIsVisible((prev) => !prev)}
      >
        REACT TASK LIST
      </h1>
      {isVisible &&
        topics.map((theme, index) => (
          <div
            id={index}
            key={index}
            data-theme={theme.value}
            onClick={handleSetTopic}
          >
            <Link to="/" className={theme.isActive ? 'active' : undefined}>
              {theme.value}
            </Link>
          </div>
        ))}
    </div>
  );
}
