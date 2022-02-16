import styled from "styled-components";
import { theme } from "../theme/Theme";
import { IStyledProps } from "../interfaces/types";

export const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  /* width */
  *::-webkit-scrollbar {
    width: 30px;
  }

  /* Track */
  *::-webkit-scrollbar-track {
    background: ${(props: IStyledProps) => props.themeState.borderColor};
  }

  /* Handle */
  *::-webkit-scrollbar-thumb {
    background: ${(props: IStyledProps) => props.themeState.terminalColor};
    border-left: ${theme.sizing.borderThickness} solid ${(props) => props.themeState.borderColor};
  }

  /* Handle on hover */
  *::-webkit-scrollbar-thumb:hover {
    /* cursor: pointer;
    filter: brightness(50%); */
  }
`;
