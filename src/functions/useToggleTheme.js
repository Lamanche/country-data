import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../themes";

const useToggleTheme = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
      localStorage.setItem("theme", "dark");
    } else {
      setTheme(lightTheme);
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
      setTheme(lightTheme);
    } else if (currentTheme === "dark") {
      setTheme(darkTheme);
    } else if (!currentTheme) {
      return;
    }
  }, []);

  return [theme, toggleTheme];
};

export default useToggleTheme;
