import React, { useState, useEffect, useContext } from "react";
import darkModeContext from "../../contexts/darkModeContext";
import darkModeStyles from "./DarkModeToggle.module.css";

const DarkModeToggle = ({ onChange }) => {
  const { dark, setDark } = useContext(darkModeContext);

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, []);

  const toggleThemeChange = () => {
    if (!dark) {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setDark(true);
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setDark(false);
    }
  };

  return (
    <div className={darkModeStyles.switchContainer} onClick={onChange}>
      <label className={darkModeStyles.switch}>
        <input
          type='checkbox'
          defaultChecked={dark}
          onChange={() => toggleThemeChange()}
        />
        <span className={`${darkModeStyles.slider} ${darkModeStyles.round}`} />
      </label>
    </div>
  );
};

export default DarkModeToggle;
