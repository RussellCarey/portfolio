import { FunctionComponent } from "react";
import styled from "styled-components";
import { IStyledProps } from "../../interfaces/types";
import { IDesktopPageProps } from "./types/interfaces";

const DesktopContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  padding: 10px;

  display: flex;
  align-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Desktop: FunctionComponent<IDesktopPageProps> = ({ themeState, children }) => {
  // Select and unselect the color of all icon

  return <DesktopContainer>{children}</DesktopContainer>;
};

export default Desktop;
