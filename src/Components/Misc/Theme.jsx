import { useState } from "react";

function Theme() {
  const [theme, setTheme] = useState("Device");

  const themes = ["Device", "Light", "Dark"];

  const rotateTheme = () => {
    let nextTheme = themes.at(themes.indexOf(theme) - 1);
    setTheme(nextTheme);
    document.body.setAttribute("theme", nextTheme);
  };

  return (
    <div className="theme-button" onClick={rotateTheme}>
      Theme:{"\n"}
      {theme}
    </div>
  );
}

export default Theme;
