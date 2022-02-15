import { useState, useRef, useEffect, FunctionComponent } from "react";
import { IconContainer, IconText } from "./styles/styled";
// import WindowContext from "context/Window/WindowContext";

import IconMenu from "./IconMenu";
import IconSquare from "./IconSquare";
import { IIconProps } from "./types/interfaces";

const IconMain: FunctionComponent<IIconProps> = ({
  pageName,
  themeState,
  label,
  img,
  windowType,
  isWeb,
  aniDelay,
  data,
}) => {
  // const windowContext = useContext(WindowContext);
  // const { createNewWindow, createNewProjectWindow } = windowContext;
  const clickPosition = useRef({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);

  // Remove all icons that may have the background hightlight -------- USE STATE
  const removeItems = (e: any) => {
    if (e.button === 0) {
      setTimeout(() => {
        setShowMenu(false);
      }, 200);
    }
  };

  // ON one click - change the color of the text background
  const onClickHandler = (e: any) => {
    if (e.button === 2) {
      clickPosition.current = { x: e.clientX, y: e.clientY };
      setShowMenu(true);
    }
  };

  // When double clicking on the icon
  const onDoubleClickHandler = () => {
    // Function: pgname, label, id, theme, windowtype
    setShowMenu(false);
    if (isWeb) {
      window.open(isWeb, "_blank");
      return;
    }

    // Create a new windw
    // createNewWindow(pageName, label, Math.floor(Math.random() * 100), themeState, windowType, data);

    console.log("made new window?");
  };

  console.log("SPAWNED AN ICON");
  console.log(label);

  return (
    <IconContainer
      onMouseDown={onClickHandler}
      onDoubleClick={onDoubleClickHandler}
      className="windowIcon"
      initial={{ opacity: 0, y: -20 }}
      transition={{ delay: aniDelay, duration: 0.5 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <IconSquare themeState={themeState} img={img} />
      <IconText themeState={themeState}>{label}</IconText>
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
