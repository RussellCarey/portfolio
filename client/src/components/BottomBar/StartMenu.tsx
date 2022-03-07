import { FunctionComponent, useContext, useState } from "react";
import { StartMenuButton, StartMenuContainer } from "./styles/styled";
import { IStartMenuProps } from "./types/interfaces";

import ThemeContext from "../../context/theme/themeContext";

const StartMenu: FunctionComponent<IStartMenuProps> = ({ themeState, canRightClick, setCanRightClick }) => {
  const { themeChangeMap, setLightTheme, setDarkTheme } = useContext(ThemeContext);
  const [isDark, setIsDark] = useState<boolean>(false);

  // Little hacky..
  const selectAndChangeRandomColor = () => {
    const mapToArray: [string, Function][] = Object.entries(themeChangeMap);
    const randomChoice = Math.floor(Math.random() * mapToArray.length);
    mapToArray[randomChoice][1]();
  };

  const toggleDarkMode = () => {
    isDark ? setDarkTheme() : setLightTheme();
    setIsDark(!isDark);
  };

  return (
    <StartMenuContainer themeState={themeState}>
      <StartMenuButton onClick={selectAndChangeRandomColor} themeState={themeState}>
        change color
      </StartMenuButton>
      <StartMenuButton onClick={toggleDarkMode} themeState={themeState}>
        toggle dark mode
      </StartMenuButton>
    </StartMenuContainer>
  );
};

export default StartMenu;
