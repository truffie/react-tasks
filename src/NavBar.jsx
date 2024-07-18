import { useState } from "react";
import { themes } from "./pages";

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

  return (
    <div className="menu">
      <h1>Themes</h1>
      {topics.map((theme, index) => (
        <div
          id={index}
          key={index}
          data-theme={theme.value}
          onClick={handleSetTopic}
          className={theme.isActive ? "active" : null}
        >
          <p>
            {index + 1}. {theme.value}
          </p>
        </div>
      ))}
    </div>
  );
}
