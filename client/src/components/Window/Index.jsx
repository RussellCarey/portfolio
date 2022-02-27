import { useState, useEffect, useRef } from "react";
import { WindowContainer } from "./styles/styled";
import { isMobile } from "react-device-detect";

import CornerButton from "./CornerButton";
import WindowMain from "./Main";
import WindowTopbar from "./Topbar";

import AboutPage from "../InnerPages/About/Index";
import BlogPage from "../InnerPages/Blog/Index";
import ProjectPage from "../InnerPages/Project/Index";
import ProjectsPage from "../InnerPages/Projects/ProjectsFolder";
import Contact from "../InnerPages/Contact/Contact";

export default function Window({ pageName, themeState, id, windowType, data, windowList }) {
  const [dimensions, setDimensions] = useState({});

  //! DEfault window position. CHANGE THIS
  const [position, setPosition] = useState({
    top: !isMobile ? 10 * windowList.length : 10,
    left: !isMobile ? 40 * windowList.length : 10,
  });

  const [isOnResize, setIsOnResize] = useState(false);
  const isResizing = useRef(false);
  const [isOnMoving, setisOnMoving] = useState(false);
  const isMoving = useRef(false);

  const container = useRef();
  const movingPoint = useRef({});
  const dragStartPoint = useRef({});

  useEffect(() => {
    // Add event listeners for detecting mouse interaction
    const moveListen = window.addEventListener("mousemove", resizeTheWindow);
    const mouseUp = window.addEventListener("mouseup", onReset);

    // Get window size on startup
    setDimensions({ width: container.current.clientWidth, height: container.current.clientHeight });

    //Cleanup
    return () => {
      window.removeEventListener("mousemove", moveListen);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, [container]);

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
        left: e.clientX - movingPoint.current.x,
        top: e.clientY - movingPoint.current.y,
      });
    }
  };

  //? On any mouse up reset all
  const onReset = () => {
    isResizing.current = false;
    isMoving.current = false;
    movingPoint.current = null;
    dragStartPoint.current = null;
    setIsOnResize(false);
    setisOnMoving(false);
  };

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
      mousePos.mouseY > mousePos.rect.height - 70 &&
      !isMobile
    ) {
      document.body.style.cursor = "nesw-resize";
      setIsOnResize(true);
    } else {
      setIsOnResize(false);
      document.body.style.cursor = "initial";
    }

    if (mousePos.mouseY > 0 && mousePos.mouseY < 100 && mousePos.mouseX > 0) {
      document.body.style.cursor = "move";
      setisOnMoving(true);
    } else {
      setisOnMoving(false);
      document.body.style.cursor = "initial";
    }
  };

  //? On click, set depending on location setwhat needs to be set
  const setStartingPoint = (e) => {
    const mousePos = getMousePositionInDiv(e);

    if (isOnResize && !isMobile) {
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
      movingPoint.current = { x: mousePos.mouseX, y: mousePos.mouseY };
    }
  };

  return (
    <WindowContainer
      onMouseMove={checkMousePosition}
      onMouseDown={setStartingPoint}
      themeState={themeState}
      dimensions={dimensions}
      position={position}
      windowList={windowList}
      isMobile={isMobile}
      id={id}
      ref={container}
      animate={{ scale: [1, 1.01, 1.01, 1.01, 1] }}
      transition={{ duration: 0.2, delay: 0.1 }}
    >
      <CornerButton themeState={themeState} onReset={onReset} id={id} />
      {/* {windowType === EWindowTypes.sidebar ? <Sidebar themeState={themeState} /> : null} */}
      <WindowTopbar themeState={themeState} />
      <WindowMain themeState={themeState}>
        {pageName === "about" ? <AboutPage themeState={themeState} dimensions={dimensions} /> : null}
        {pageName === "blog" ? <BlogPage themeState={themeState} dimensions={dimensions} /> : null}
        {pageName === "contact" ? <Contact themeState={themeState} dimensions={dimensions} /> : null}
        {pageName === "project" ? <ProjectPage themeState={themeState} data={data} dimensions={dimensions} /> : null}
        {pageName === "projects" ? <ProjectsPage themeState={themeState} /> : null}
      </WindowMain>
    </WindowContainer>
  );
}
