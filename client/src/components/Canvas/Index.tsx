import { FunctionComponent, useContext, useState, useEffect } from "react";
import ThemeContext from "../../context/theme/themeContext";
import styled from "styled-components";
import { ReactSketchCanvas } from "react-sketch-canvas";

import CanvasControls from "./CanvasControls";
import { getDrawingData } from "./services/dbService";
import PopupComp from "./Popup";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

interface ICanvasProps {
  canvasRef: React.MutableRefObject<any>;
  canDraw: boolean;
  setCanDraw: React.Dispatch<React.SetStateAction<boolean>>;
}

const Index: FunctionComponent<ICanvasProps> = ({ canvasRef, canDraw, setCanDraw }) => {
  const { theme } = useContext(ThemeContext);

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string[]>([
    `Activated the drawing mode!`,
    " ",
    `Anyone can add the the canvas and create a community drawing.`,
    `The erase button will erase the whole drawing, save will upload and overwrite the image and close will close this mode!`,
    `Have fun.`,
  ]);

  // Get current drawing state from the DB..
  const getInitialDrawing = async () => {
    const drawingData = await getDrawingData();
    const paths = await JSON.parse(drawingData.data.data.rows[0].data);
    await canvasRef.current.loadPaths(paths);
  };

  useEffect(() => {
    getInitialDrawing();
  }, []);

  const onDraw = async () => {
    // On clicking the BG show the drawing mode..
    if (!canDraw) setShowPopup(true);
    if (!canDraw) setCanDraw(true);
  };

  return (
    <Container onClick={() => onDraw()}>
      {showPopup ? <PopupComp setShowPopup={setShowPopup} message={popupMessage} /> : null}

      {canDraw ? (
        <CanvasControls
          canvasRef={canvasRef}
          setCanDraw={setCanDraw}
          setPopupMessage={setPopupMessage}
          setShowPopup={setShowPopup}
        />
      ) : null}

      <ReactSketchCanvas
        ref={canvasRef}
        canvasColor="transparent"
        width={canDraw ? "100vw" : "0"}
        height={canDraw ? "100vh" : "0"}
        strokeWidth={canDraw ? 3 : 0}
        strokeColor={theme.borderColor}
        withTimestamp={true}
      />
    </Container>
  );
};

export default Index;
