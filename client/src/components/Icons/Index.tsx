import React, { useState, useRef, useEffect, FunctionComponent, useContext } from "react";
import { IconContainer, IconText } from "./styles/styled";
import WindowContext from "../../context/window/windowContext";

import IconMenu from "./IconMenu";
import IconSquare from "./IconSquare";
import { IIconProps } from "./types/interfaces";

const IconMain: FunctionComponent<IIconProps> = ({
  pageName,
  text,
  data,
  windowType,
  themeState,
  isWeb,
  aniDelay,
  selectedIcon,
  setSelectedIcon,
  isProject,
}) => {
  const windowContext = useContext(WindowContext);
  const { createNewWindow } = windowContext;

  const clickPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    if (selectedIcon === pageName) setIsSelected(true);
    if (selectedIcon !== pageName) setIsSelected(false);
    if (selectedIcon !== pageName) setShowMenu(false);
  }, [selectedIcon, pageName]);

  // ON one click - change the color of the text background
  const onClickHandler = (e: React.MouseEvent) => {
    if (e.button === 0) {
      setSelectedIcon(pageName);
    }

    // Remove ability to show open menu on right click of icon for now..
    // if (e.button === 2) {
    //   setSelectedIcon(pageName);
    //   setShowMenu(true);
    //   clickPosition.current = { x: e.pageX, y: e.pageY };
    // }
  };

  // When double clicking on the icon
  const onDoubleClickHandler = () => {
    setShowMenu(false);

    if (isWeb) return window.open(isWeb, "_blank");

    //pageName: string,// id: number,// windowType: string, // data: any,// isProject: boolean
    createNewWindow(pageName, windowType, data, false);
  };

  return (
    <IconContainer
      onMouseDown={onClickHandler}
      onDoubleClick={onDoubleClickHandler}
      initial={{ opacity: 0, y: -20 }}
      transition={{ delay: aniDelay, duration: 0.5 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <IconSquare themeState={themeState} label={pageName} name={text} isProject={isProject} />

      <IconText themeState={themeState} isSelected={isSelected}>
        {text}
      </IconText>

      <IconMenu
        themeState={themeState}
        top={clickPosition.current ? clickPosition.current.y + 100 : null}
        left={clickPosition.current ? clickPosition.current.x + 200 : null}
        display={showMenu === true ? "flex" : "none"}
        onClickHandler={onDoubleClickHandler}
      />
    </IconContainer>
  );
};

export default IconMain;
