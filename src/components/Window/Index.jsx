import { useState, useEffect, useRef, useContext } from "react";
import { WindowContainer } from "./styles/styled";

import CornerButton from "./CornerButton";
import Sidebar from "./Sidebar";
import WindowMain from "./Main";
import WindowTopbar from "./Topbar";

// import Project from "../pages/Project";
import AboutPage from "../Pages/About";
// import HowtoPage from "../pages/Howto";
// import ProjectTemplate from "../pages/Project.Template";
// import Contact from "../pages/Contact";

//! START
export default function Window({ pageName, themeState, id, windowType, data, isProject, windowList }) {
  const [dimensions, setDimensions] = useState({});

  const [position, setPosition] = useState({
    top: 10 * windowList.length,
    left: 40 * windowList.length,
  });

  const [isOnResize, setIsOnResize] = useState(false);
  const isResizing = useRef(false);
  const [isOnMoving, setisOnMoving] = useState(false);
  const isMoving = useRef(false);
  const movingPoint = useRef([]);
  const dragStartPoint = useRef({});

  useEffect(() => {
    const moveListen = window.addEventListener("mousemove", resizeTheWindow);
    const mouseUp = window.addEventListener("mouseup", onReset);
    return () => {
      window.removeEventListener("mousemove", moveListen);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  const getMousePositionInDiv = (e) => {
    // Important: currentTarget for parent but target for div -- This is why the math was off -- wrong div..
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    const mouseX = e.clientX - rect.left;
    return { mouseX, mouseY, rect };
  };

  //? Checks the mouse position inside the div
  const checkMousePosition = (e) => {
    const mousePos = getMousePositionInDiv(e);
    if (
      mousePos.mouseX < mousePos.rect.width &&
      mousePos.mouseX > mousePos.rect.width - 100 &&
      mousePos.mouseY < mousePos.rect.height &&
      mousePos.mouseY > mousePos.rect.height - 70
    ) {
      setIsOnResize(true);
    } else {
      setIsOnResize(false);
    }

    if (mousePos.mouseY > 0 && mousePos.mouseY < 100 && mousePos.mouseX > 0) {
      setisOnMoving(true);
    } else {
      setisOnMoving(false);
    }
  };

  //? On click, set depending on location setwhat needs to be set
  const setStartingPoint = (e) => {
    const mousePos = getMousePositionInDiv(e);

    if (isOnResize) {
      dragStartPoint.current = {
        x: e.clientX,
        y: e.clientY,
        w: mousePos.rect.width,
        h: mousePos.rect.height,
      };

      isResizing.current = true;
    }

    if (isOnMoving) {
      isMoving.current = true;
      movingPoint.current = [mousePos.mouseX, mousePos.mouseY];
    }
  };

  //? Window event listener
  const resizeTheWindow = (e) => {
    if (isResizing.current === true) {
      setDimensions({
        width: dragStartPoint.current.w + (e.clientX - dragStartPoint.current.x),
        height: dragStartPoint.current.h + (e.clientY - dragStartPoint.current.y),
      });
    }

    if (isMoving.current === true) {
      setPosition({
        left: e.clientX - movingPoint.current[0],
        top: e.clientY - movingPoint.current[1],
      });
    }
  };

  //? On any mouse up reset all
  const onReset = () => {
    isResizing.current = false;
    isMoving.current = false;
    movingPoint.current = null;
    dragStartPoint.current = null;
    setIsOnResize(null);
    setisOnMoving(null);
  };

  return (
    <WindowContainer
      onMouseMove={checkMousePosition}
      onMouseDown={setStartingPoint}
      themeState={themeState}
      dimensions={dimensions}
      position={position}
      windowList={windowList}
      id={id}
      animate={{ scale: [1, 1.01, 1.01, 1.01, 1] }}
      transition={{ duration: 0.2, delay: 0.1 }}
    >
      <CornerButton themeState={themeState} onReset={onReset} id={id} />

      {/* Load the sidebar if needed or not..*/}
      {windowType === "sidebar" ? <Sidebar themeState={themeState}></Sidebar> : null}

      <WindowMain themeState={themeState}>
        <WindowTopbar themeState={themeState} />
        {/* Main window pages */}
        {/* {pageName && pageName === "Projects" ? <Project themeState={themeState} data={data}></Project> : null} */}
        {pageName && pageName === "about" ? <AboutPage themeState={themeState}></AboutPage> : null}
        {/* {pageName && pageName === "Howto" ? <HowtoPage themeState={themeState}></HowtoPage> : null}
        {pageName && pageName === "Contact" ? <Contact themeState={themeState}></Contact> : null}
        {/* Project subpages */}
        {/* {isProject ? <ProjectTemplate themeState={themeState} data={data}></ProjectTemplate> : null} */} */
      </WindowMain>
    </WindowContainer>
  );
}
