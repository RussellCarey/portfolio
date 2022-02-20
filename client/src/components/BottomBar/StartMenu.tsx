import { FunctionComponent, useContext, useState, useEffect } from "react";
import { StartMenuButton, StartMenuContainer } from "./styles/styled";
import { IStartMenuProps } from "./types/interfaces";

import ThemeContext from "../../context/theme/themeContext";

const StartMenu: FunctionComponent<IStartMenuProps> = ({ themeState, canRightClick, setCanRightClick }) => {
  const { themeChangeMap } = useContext(ThemeContext);
  const [isDark, setIsDark] = useState<boolean>(false);

  const selectAndChangeRandomColor = () => {
    //! Dark theme is not great nor the back groind colors.
    themeChangeMap.pink();
  };

  const toggleDarkMode = () => {
    isDark ? themeChangeMap.dark() : themeChangeMap.light();
    setIsDark(!isDark);
  };

  const rightClickToggle = () => {
    // if (canRightClick) {
    //   console.log("Displable right click");
    //   document.removeEventListener("contextmenu", (e) => e.preventDefault());
    // }
    // if (!canRightClick) {
    //   console.log("enabled right lcik");
    //   document.addEventListener("contextmenu", (e) => e.preventDefault());
    // }
    // setCanRightClick(!canRightClick);
  };

  return (
    <StartMenuContainer themeState={themeState}>
      <StartMenuButton onClick={selectAndChangeRandomColor} themeState={themeState}>
        change color
      </StartMenuButton>
      <StartMenuButton onClick={toggleDarkMode} themeState={themeState}>
        toggle dark mode
      </StartMenuButton>
      <StartMenuButton onClick={rightClickToggle} themeState={themeState}>
        {canRightClick ? "disabled right click" : "enable right click"}
      </StartMenuButton>
    </StartMenuContainer>
  );
};

export default StartMenu;
