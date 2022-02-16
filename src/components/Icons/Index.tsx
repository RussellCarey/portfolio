import { useState, useRef, useEffect, FunctionComponent, useContext } from "react";
import { IconContainer, IconText } from "./styles/styled";

import WindowContext from "../../context/window/windowContext";

import IconMenu from "./IconMenu";
import IconSquare from "./IconSquare";
import { IIconProps } from "./types/interfaces";

const IconMain: FunctionComponent<IIconProps> = ({
  pageName,
  themeState,
  label,
  isWeb,
  aniDelay,
  selectedIcon,
  setSelectedIcon,
}) => {
  const windowContext = useContext(WindowContext);
  const { createNewWindow, createNewProjectWindow } = windowContext;

  const clickPosition = useRef({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    if (selectedIcon === label) setIsSelected(true);
    if (selectedIcon !== label) setIsSelected(false);
  }, [selectedIcon, label]);

  // ON one click - change the color of the text background
  const onClickHandler = (e: any) => {
    if (e.button === 0) {
      setSelectedIcon(label);
    }

    if (e.button === 2) {
      console.log(label);
      setSelectedIcon(label);
    }
  };

  // When double clicking on the icon
  const onDoubleClickHandler = () => {
    console.log("DOUBLE CLICKED CREATING WINDOWWOW");
    // Function: pgname, label, id, theme, windowtype
    setShowMenu(false);

    if (isWeb) {
      window.open(isWeb, "_blank");
      return;
    }

    //! Create a new windw

    console.log("CREATING WINDOW");
  };

  return (
    <IconContainer
      onMouseDown={onClickHandler}
      onDoubleClick={onDoubleClickHandler}
      initial={{ opacity: 0, y: -20 }}
      transition={{ delay: aniDelay, duration: 0.5 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <IconSquare themeState={themeState} label={label} />

      <IconText themeState={themeState} isSelected={isSelected}>
        {label}
      </IconText>

      <IconMenu
        themeState={themeState}
        top={clickPosition.current ? clickPosition.current.y : null}
        left={clickPosition.current ? clickPosition.current.x : null}
        display={showMenu === true ? "flex" : "none"}
        onClickHandler={onDoubleClickHandler}
      />
    </IconContainer>
  );
};

export default IconMain;
