import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${(props) => props.themeState.terminalColor};

  border-radius: 0 15px 15px 0;

  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export default function WindowMain({ themeState, children }) {
  return <Container themeState={themeState}>{children}</Container>;
}
