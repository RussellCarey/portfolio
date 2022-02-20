import { useContext } from "react";
import WindowContext from "../../context/window/windowContext";
import { CornerButtonContainer } from "./styles/styled";

export default function CornerButton({ themeState, left, id }) {
  const { deleteActiveWindow } = useContext(WindowContext);
  return (
    <CornerButtonContainer
      left={left}
      themeState={themeState}
      onClick={() => deleteActiveWindow(id)}
    ></CornerButtonContainer>
  );
}
