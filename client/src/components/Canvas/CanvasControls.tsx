import React, { FunctionComponent } from "react";
import { ControlContainer, Button } from "./styled/styled";
import { uploadDrawing } from "./services/dbService";

interface IPropsCanvasController {
  canvasRef: React.MutableRefObject<any>;
  setCanDraw: React.Dispatch<React.SetStateAction<boolean>>;
  setPopupMessage: React.Dispatch<React.SetStateAction<string[]>>;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const CanvasControls: FunctionComponent<IPropsCanvasController> = ({
  canvasRef,
  setCanDraw,
  setPopupMessage,
  setShowPopup,
}) => {
  const saveDrawingToDB = async () => {
    const drawingPaths = await canvasRef.current.exportPaths();
    const drawingString = await JSON.stringify(drawingPaths);
    const uploadedDrawing = await uploadDrawing(drawingString);

    // If uploaded
    if (uploadedDrawing.data.status === "success") {
      showSavedMessage();
    } else {
      showErrorMessage();
    }
  };

  const eraseDrawing = async () => {
    await canvasRef.current.resetCanvas();
  };

  // Popups
  const showSavedMessage = () => {
    setShowPopup(true);
    setPopupMessage([
      "You have saved your current drawing to the server!",
      "Now all people can see your artistic glory!",
    ]);
  };

  const showErrorMessage = () => {
    setShowPopup(true);
    setPopupMessage(["Sorry, error uploading the image to the server", "Try again?"]);
  };

  const closeCanvas = () => {
    setPopupMessage([
      `Activated the drawing mode!`,
      `Anyone can add the the canvas and create a community drawing.`,
      `The erase button will erase the whole drawing, save will upload and overwrite the image and close will close this mode!`,
      `If possible, please add to the image. Erase and then save is a no no.`,
      `Have fun.`,
    ]);

    setCanDraw(false);
  };

  return (
    <ControlContainer>
      <Button onClick={eraseDrawing}>erase</Button>
      <Button onClick={saveDrawingToDB}>save</Button>
      <Button onClick={closeCanvas}>close</Button>
    </ControlContainer>
  );
};

export default CanvasControls;
