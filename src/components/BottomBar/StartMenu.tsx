import { FunctionComponent } from "react";
import { StartMenuButton, StartMenuContainer } from "./styles/styled";
import { IStartMenuProps } from "./types/interfaces";

const StartMenu: FunctionComponent<IStartMenuProps> = ({ themeState }) => {
  return (
    <StartMenuContainer
      themeState={themeState}
      initial={{ y: 450 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <StartMenuButton themeState={themeState}>random colors</StartMenuButton>
      <StartMenuButton themeState={themeState}>toggle dark mode</StartMenuButton>
      <StartMenuButton themeState={themeState}>allow right click</StartMenuButton>
      <StartMenuButton themeState={themeState}>play random game? :)</StartMenuButton>
    </StartMenuContainer>
  );
};

export default StartMenu;
