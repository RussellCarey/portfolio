import { FunctionComponent } from "react";
import { IconMenuContainer } from "./styles/styled";
import { IIconMenuProps } from "./types/interfaces";

const IconMenu: FunctionComponent<IIconMenuProps> = ({ top, left, display, themeState, onClickHandler }) => {
  return (
    <IconMenuContainer themeState={themeState} display={display} onClick={onClickHandler}>
      Open
    </IconMenuContainer>
  );
};

export default IconMenu;
