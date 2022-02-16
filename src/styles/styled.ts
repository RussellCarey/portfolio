import styled from "styled-components";
import { IStyledProps } from "../interfaces/styled";

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
    background: ${(props) => props.themeState.backgroundColor};
  }

  /* Handle on hover */
  *::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
