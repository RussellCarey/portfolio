import { useState, useContext } from "react";
import ThemeContext from "../../context/theme/themeContext";
import { BottomBarContainer } from "./styles/styled";
import StartButton from "./StartButton";
import StartTime from "./StartTime";

export default function BottomBar() {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  return (
    <BottomBarContainer
      initial={{ y: 100 }}
      transition={{ delay: 2, duration: 1 }}
      animate={{ y: 0 }}
      themeState={theme}
    >
      <StartButton themeState={theme} setShowStartMenu={setShowStartMenu} showStartMenu={showStartMenu} />
      <StartTime themeState={theme} />
    </BottomBarContainer>
  );
}
