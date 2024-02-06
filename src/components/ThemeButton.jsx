import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeContext from "../context/theme/ThemeContext";

const ThemeButton = () => {
  const { dispatch, darkMode } = useContext(ThemeContext);

  const changeTheme = () => {
    dispatch({
      type: "CHANGE_THEME",
    });
  };

  const customStyle = {
    height: "50px",
    width: "50px",
    borderRadius: "200px",
    textAlign: "center",
    position: "fixed",
    right: "25px",
    bottom: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  };

  return (
    <span
      className={
        darkMode ? "bg-dark text-light shadow" : "bg-light text-warning shadow"
      }
      style={customStyle}
      onClick={changeTheme}
    >
      {darkMode ? <FaMoon /> : <FaSun />}
    </span>
  );
};

export default ThemeButton;
