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

  // Enable / disabled right clicking on the wepage (default)
  // const rightClickToggle = () => {
  //   if (canRightClick) {
  //     console.log("Displable right click");
  //     document.removeEventListener("contextmenu", (e) => e.preventDefault());
  //   }
  //   if (!canRightClick) {
  //     console.log("enabled right lcik");
  //     document.addEventListener("contextmenu", (e) => e.preventDefault());
  //   }
  //   setCanRightClick(!canRightClick);
  // };

  return (
    <StartMenuContainer themeState={themeState}>
      <StartMenuButton onClick={selectAndChangeRandomColor} themeState={themeState}>
        change color
      </StartMenuButton>
      <StartMenuButton onClick={toggleDarkMode} themeState={themeState}>
        toggle dark mode
      </StartMenuButton>
      {/* <StartMenuButton themeState={themeState}>
        {canRightClick ? "disabled right click" : "enable right click"}
      </StartMenuButton> */}
    </StartMenuContainer>
  );
};

export default StartMenu;
