import { useState } from 'react';
import { themes } from './pages';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';

export function NavBar({ updateTheme }) {
  const typedThemes = Object.keys(themes).reduce((typedTheme, theme) => {
    typedTheme.push({
      value: theme,
      isActive: false,
    });
    return typedTheme;
  }, []);

  const [topics, setTopics] = useState(typedThemes);
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
  const [isVisible, setIsVisible] = useState(
    Cookie.get('visibility') === 'true'
  );

  function handleListVisibility() {
    setIsVisible((prev) => {
      const newVisibility = !prev;
      Cookie.set('visibility', newVisibility, { expires: 1 });
      return newVisibility;
    });
  }
  return (
    <div className="menu">
      <h1
        className={isVisible ? 'open' : undefined}
        onClick={handleListVisibility}
      >
        REACT TASK LIST
      </h1>
      {isVisible &&
        topics.map((theme, i) => (
          <div id={i} key={i} data-theme={theme.value} onClick={handleSetTopic}>
            <Link to="/" className={theme.isActive ? 'active' : undefined}>
              {theme.value}
            </Link>
          </div>
        ))}
    </div>
  );
}
