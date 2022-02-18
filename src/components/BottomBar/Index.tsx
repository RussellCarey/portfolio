import { useState, useContext } from "react";
import ThemeContext from "../../context/theme/themeContext";
import { BottomBarContainer } from "./styles/styled";
import StartButton from "./StartButton";
import StartTime from "./StartTime";
import StartMenu from "./StartMenu";

export default function BottomBar() {
  const [showStartMenu, setShowStartMenu] = useState<boolean>(false);
  const [canRightClick, setCanRightClick] = useState<boolean>(false);
  const { theme } = useContext(ThemeContext);

  return (
    <BottomBarContainer
      initial={{ y: 100 }}
      transition={{ delay: 1, duration: 1 }}
      animate={{ y: 0 }}
      themeState={theme}
    >
      <StartButton themeState={theme} setShowStartMenu={setShowStartMenu} showStartMenu={showStartMenu} />
      <StartTime themeState={theme} />

      {showStartMenu ? (
        <StartMenu themeState={theme} canRightClick={canRightClick} setCanRightClick={setCanRightClick} />
      ) : null}
    </BottomBarContainer>
  );
}
