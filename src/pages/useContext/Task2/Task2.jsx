import { createContext, useCallback, useContext, useState } from 'react';

const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {
  const translations = {
    ru: 'вчера была отличная погода',
    en: 'the weather was great yesterday',
    es: 'el clima estuvo genial ayer',
  };

  const [lang, setLang] = useState('ru');

  return (
    <TranslationContext.Provider value={{ translations, lang, setLang }}>
      {children}
    </TranslationContext.Provider>
  );
};

export function Task2() {
  return (
    <>
      <h2>
        Создайте приложение, где пользователь сможет выбирать язык интерфейса.
        Используйте useContext для сохранения текущего выбранного языка и
        перевода текста в выбранный язык в компонентах.
      </h2>
      <div>
        <TranslationProvider>
          <LangBlock />
          <InfoBlock />
        </TranslationProvider>
      </div>
    </>
  );
}

const LangBlock = () => {
  const { translations, setLang } = useContext(TranslationContext);
  const switchLangue = useCallback(
    (e) => {
      setLang(e.target.textContent);
    },
    [setLang]
  );
  return (
    <>
      <h3>choose language: </h3>
      {Object.keys(translations).map((lang, i) => (
        <button onClick={switchLangue} key={lang}>
          {lang}
        </button>
      ))}
    </>
  );
};

const InfoBlock = () => {
  const { translations, lang } = useContext(TranslationContext);
  return <h2>{translations[lang]}</h2>;
};
