import { useReducer } from "react";
import ThemeReducer from "./themeReducer";
import ThemeContext from "./themeContext";
import { ICommandObject } from "./types";
import { lightThemeDefault, darkThemeDefault } from "./colorSchemes";
import { SET_BACKGROUND_COLOR, SET_DARK_THEME, SET_LIGHT_THEME, IPropsState } from "./types";

const ThemeState = (props: IPropsState) => {
  const savedTheme = localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")!) : null;
  const defaultState = lightThemeDefault;

  const [theme, dispatch] = useReducer(ThemeReducer, defaultState);

  const setBackgroundColor = (commandObj: ICommandObject) => {
    const color = commandObj.args[0];
    dispatch({ type: SET_BACKGROUND_COLOR, payload: color });
    localStorage.setItem("theme", JSON.stringify({ ...theme, backgroundColor: color }));
    return ["Changed background color."];
  };

  const setLightTheme = () => {
    dispatch({ type: SET_LIGHT_THEME, payload: lightThemeDefault });
    localStorage.setItem("theme", JSON.stringify({ ...theme, ...lightThemeDefault }));
    return ["Changed theme to light."];
  };

  const setDarkTheme = () => {
    dispatch({ type: SET_DARK_THEME, payload: darkThemeDefault });
    localStorage.setItem("theme", JSON.stringify({ ...theme, ...darkThemeDefault }));
    return ["Changed theme to dark."];
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
