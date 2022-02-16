import styled from "styled-components";
import { theme } from "../../theme/Theme";

const Container = styled.div`
  width: 34px;
  height: 34px;

  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 50%;

  background-color: ${(props) => props.themeState.terminalColor};
  border: ${theme.sizing.borderThickness} solid ${(props) => props.themeState.borderColor};

  box-shadow: 2px 2px 0 ${(props) => props.themeState.borderColor};
`;

export default function CornerButton({ themeState, left, onReset, onClick, id }) {
  return <Container left={left} themeState={themeState} onMouseMove={onReset} onClick={() => onClick(id)}></Container>;
}
