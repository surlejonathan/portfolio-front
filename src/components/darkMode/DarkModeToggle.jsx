import React, { useState, useEffect } from "react";
import darkModeStyles from "./DarkModeToggle.module.css";

const DarkModeToggle = ({ onChange }) => {
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, []);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(false);
    }
  };

  return (
    <div className={darkModeStyles.switchContainer} onClick={onChange}>
      <label className={darkModeStyles.switch}>
        <input
          type='checkbox'
          defaultChecked={checked}
          onChange={() => toggleThemeChange()}
        />
        <span className={`${darkModeStyles.slider} ${darkModeStyles.round}`} />
      </label>
    </div>
  );
};

export default DarkModeToggle;
