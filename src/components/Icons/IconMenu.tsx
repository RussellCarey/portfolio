import { FunctionComponent } from "react";
import { IconButton, IconMenuContainer } from "./styles/styled";

interface IIconMenuProps {
  top: number | null;
  left: number | null;
  display: any;
  themeState: any;
  onClickHandler: any;
}

const IconMenu: FunctionComponent<IIconMenuProps> = ({ top, left, display, themeState, onClickHandler }) => {
  return (
    <IconMenuContainer top={top} left={left} themeState={themeState} display={display}>
      <IconButton themeState={themeState} onClick={onClickHandler}>
        Open
      </IconButton>
    </IconMenuContainer>
  );
};

export default IconMenu;
