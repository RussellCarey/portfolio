import styled from "styled-components";
import { theme } from "../../theme/Theme";

const Container = styled.div`
  width: 200px;
  min-width: 200px;
  height: 100%;

  background-color: ${(props) => props.themeState.terminalColor};
  border-right: ${theme.sizing.borderThickness} solid ${(props) => props.themeState.borderColor};

  border-radius: 15px 0 0 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Sidebar({ themeState, symbol, left }) {
  return <Container themeState={themeState}></Container>;
}
