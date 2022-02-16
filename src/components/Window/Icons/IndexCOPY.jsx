import React, { useState, useContext, useRef, useEffect } from "react";
import WindowIconSquare from "./Square";
import IconMenu from "../../Main/Icon.Menu";

import { WindowIconContainer, WindowIconText } from "./styles/styled";

export default function Icon({ pageName, themeState, label, img, windowType, isWeb, aniDelay }) {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const clickAway = window.addEventListener("mousedown", removeItems);
    return () => {
      window.removeEventListener("click", removeItems);
    };
  }, []);

  const removeItems = (e) => {
    if (e.button === 0) {
      setTimeout(() => {
        setShowMenu(false);
      }, 200);
    }
  };

  const onClickHandler = (e) => {
    const rect = e.target.getBoundingClientRect();
    if (e.button === 2) {
      setClickPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      setShowMenu(true);
    }
  };

  const onDoubleClickHandler = () => {
    // Function: pgname, label, id, theme, windowtype
    setShowMenu(false);
    if (isWeb) {
      window.open(isWeb, "_blank");
      return;
    }
    //!!!!!!! CREATE WINDOW
    // createNewWindow(pageName, label, Math.floor(Math.random() * 100), themeState, windowType);
    console.log("made new window?");
  };

  return (
    <WindowIconContainer
      onMouseDown={onClickHandler}
      onDoubleClick={onDoubleClickHandler}
      className="windowIcon"
      initial={{ opacity: 0 }}
      transition={{ delay: aniDelay, duration: 0.5 }}
      animate={{ opacity: 1 }}
    >
      <WindowIconSquare themeState={themeState} img={img} />
      <WindowIconText themeState={themeState}>{label}</WindowIconText>
      <IconMenu
        themeState={themeState}
        top={clickPosition ? clickPosition.y : null}
        left={clickPosition ? clickPosition.x : null}
        display={showMenu === true ? "flex" : "none"}
        onClickHandler={onDoubleClickHandler}
      />
    </WindowIconContainer>
  );
}
