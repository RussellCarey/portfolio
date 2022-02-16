import { FunctionComponent } from "react";
import styled from "styled-components";
import { IStyledProps } from "../../interfaces/types";
import { IDesktopPageProps } from "./types/interfaces";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10px;

  display: flex;
  align-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;

  background-color: ${(props: IStyledProps) => props.themeState.backgroundColor};
`;

const Desktop: FunctionComponent<IDesktopPageProps> = ({ themeState, children }) => {
  // Select and unselect the color of all icon

  return <Container themeState={themeState}>{children}</Container>;
};

export default Desktop;
