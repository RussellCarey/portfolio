import { useReducer } from "react";
import ThemeReducer from "./themeReducer";
import ThemeContext from "./themeContext";
import {
  SET_DARK_THEME,
  SET_LIGHT_THEME,
  SET_BLUE_THEME,
  SET_PEACH_THEME,
  SET_PINK_THEME,
  SET_PURPLE_THEME,
  SET_TURQUOISE_THEME,
  IPropsState,
} from "./types";
import { lightThemeDefault, darkThemeDefault, KobayashiColors } from "./colorSchemes";

//!
//!
//! PUT ALL THESE INFO ONE FUNCTION FOR THE CHANGE IF POSSIBLE....

const ThemeState = (props: IPropsState) => {
  const savedTheme = localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")!) : null;
  const defaultState = lightThemeDefault;

  const [theme, dispatch] = useReducer(ThemeReducer, defaultState);

  const setLightTheme = () => {
    dispatch({ type: SET_LIGHT_THEME, payload: lightThemeDefault });
    localStorage.setItem("theme", JSON.stringify({ ...theme, ...lightThemeDefault }));
    return { ...theme, ...lightThemeDefault };
  };

  const setDarkTheme = () => {
    dispatch({ type: SET_DARK_THEME, payload: darkThemeDefault });
    localStorage.setItem("theme", JSON.stringify({ ...theme, ...darkThemeDefault }));
    return { ...theme, ...darkThemeDefault };
  };

  const setPinkColor = () => {
    const newTheme = {
      ...theme,
      backgroundColor: KobayashiColors.pink.background,
      terminalColor: KobayashiColors.pink.terminal,
    };

    dispatch({ type: SET_PINK_THEME, payload: KobayashiColors });
    localStorage.setItem("theme", JSON.stringify(newTheme));

    return newTheme;
  };

  const setPeachColor = () => {
    const newTheme = {
      ...theme,
      backgroundColor: KobayashiColors.peach.background,
      terminalColor: KobayashiColors.peach.terminal,
    };

    dispatch({ type: SET_PEACH_THEME, payload: KobayashiColors });
    localStorage.setItem("theme", JSON.stringify(newTheme));

    return newTheme;
  };

  const setTurquoiseColor = () => {
    const newTheme = {
      ...theme,
      backgroundColor: KobayashiColors.turquoise.background,
      terminalColor: KobayashiColors.turquoise.terminal,
    };

    dispatch({ type: SET_TURQUOISE_THEME, payload: KobayashiColors });
    localStorage.setItem("theme", JSON.stringify(newTheme));

    return newTheme;
  };

  const setPurpleColor = () => {
    const newTheme = {
      ...theme,
      backgroundColor: KobayashiColors.purple.background,
      terminalColor: KobayashiColors.purple.terminal,
    };

    dispatch({ type: SET_PURPLE_THEME, payload: KobayashiColors });
    localStorage.setItem("theme", JSON.stringify(newTheme));

    return newTheme;
  };

  const setBlueColor = () => {
    const newTheme = {
      ...theme,
      backgroundColor: KobayashiColors.blue.background,
      terminalColor: KobayashiColors.blue.terminal,
    };

    dispatch({ type: SET_BLUE_THEME, payload: KobayashiColors });
    localStorage.setItem("theme", JSON.stringify(newTheme));

    return newTheme;
  };

  const themeChangeMap = {
    light: setLightTheme,
    dark: setDarkTheme,
    blue: setBlueColor,
    peach: setPeachColor,
    turquoise: setTurquoiseColor,
    purple: setPurpleColor,
    pink: setPinkColor,
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeChangeMap,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
