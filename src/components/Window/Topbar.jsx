import styled from "styled-components";
import { theme } from "../../theme/Theme";

const Container = styled.div`
  width: 100%;
  height: 50px;
  min-height: 100px;

  background-color: ${(props) => props.themeState.terminalColor};
  border-bottom: ${theme.sizing.borderThickness} solid ${(props) => props.themeState.borderColor};

  border-radius: 0 15px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function WindowTopbar({ themeState, symbol, left }) {
  return <Container themeState={themeState}></Container>;
}
