import { useState, useEffect, useRef } from "react";
import { WindowContainer } from "./styles/styled";
import { isMobile } from "react-device-detect";

// Util functions
import { getMousePositionInDiv, isInsideTopBar, isInsideResize } from "./utils/utilFunctions";

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

  const defaultTop = !isMobile ? 10 * windowList.length : 10;
  const defaultLeft = !isMobile ? 40 * windowList.length : 10;
  const [position, setPosition] = useState({ top: defaultTop, left: defaultLeft });

  const container = useRef();
  const [isOnResize, setIsOnResize] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isOnMoving, setisOnMoving] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [movingPoint, setMovingPoint] = useState();
  const [dragStartPoint, setStartDragPoint] = useState();

  useEffect(() => {
    // Get window size on startup - this is for resizing
    setDimensions({ width: container.current.clientWidth, height: container.current.clientHeight });
  }, [container]);

  // Check if mouse is in the movement zone
  const checkMouseInMove = (mousePos) => {
    if (isInsideTopBar(mousePos)) {
      document.body.style.cursor = "move";
      setisOnMoving(true);
    } else {
      setisOnMoving(false);
      document.body.style.cursor = "initial";
    }
  };

  // Check if mouse is in the resize zone.
  const checkMouseInResize = (mousePos) => {
    if (isInsideResize(mousePos)) {
      document.body.style.cursor = "move";
      setIsOnResize(true);
    } else {
      setIsOnResize(false);
      document.body.style.cursor = "initial";
    }
  };

  // When clicked on and in position to resize
  const setDragPointAndStartDrag = (e, mousePos) => {
    if (isOnResize && !isMobile) {
      setStartDragPoint({
        x: e.clientX,
        y: e.clientY,
        w: mousePos.rect.width,
        h: mousePos.rect.height,
      });

      setIsResizing(true);
    }
  };

  // When clicked on and in position..
  const setStartingPoint = (e) => {
    const mousePos = getMousePositionInDiv(e);
    setDragPointAndStartDrag(e, mousePos);

    if (isOnMoving) {
      setIsMoving(true);
      setMovingPoint({ x: mousePos.mouseX, y: mousePos.mouseY });
    }
  };

  // Update position when resizing
  const resizingProcess = (e) => {
    if (isResizing) {
      setDimensions({
        width: dragStartPoint.w + (e.clientX - dragStartPoint.x),
        height: dragStartPoint.h + (e.clientY - dragStartPoint.y),
      });
    }
  };

  // Update position whilst moving
  const movingProcess = (e) => {
    if (isMoving) {
      setPosition({
        left: e.clientX - movingPoint.x,
        top: e.clientY - movingPoint.y,
      });
    }
  };

  //? MOUSEMOVE listener
  const changeWindowS = (e) => {
    resizingProcess(e);
    movingProcess(e);
  };

  //? Checks the mouse position inside the div
  const changeWindowSizeOrPos = (e) => {
    const mousePos = getMousePositionInDiv(e);
    checkMouseInMove(mousePos);
    checkMouseInResize(mousePos);
    if (isMoving || isResizing) changeWindowS(e);
  };

  //? MOUSEUP reset
  const onReset = () => {
    setIsResizing(false);
    setIsMoving(false);
    setIsOnResize(false);
    setisOnMoving(false);
    setMovingPoint(null);
    setStartDragPoint(null);
  };

  return (
    <WindowContainer
      onMouseMove={changeWindowSizeOrPos}
      onMouseDown={setStartingPoint}
      onMouseUp={onReset}
      onMouseLeave={onReset}
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
