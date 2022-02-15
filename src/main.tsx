import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import ThemeContext from "./context/theme/themeContext";
import Icon from "./components/Icons/Index";
import BottomBar from "./components/BottomBar/Index";
import Desktop from "./components/Pages/Desktop";
// import WindowContext from "../context/window/WindowContext";
import { IStyledProps } from "./interfaces/styled";

const AppContainer = styled.div`
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

export default function Home() {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  // const windowContext = useContext(WindowContext);
  // const { windowState } = windowContext;

  return (
    <AppContainer themeState={theme}>
      <Desktop themeState={theme}>
        <Icon
          themeState={theme}
          pageName={"About"}
          label={"about"}
          img={"about"}
          aniDelay={0.1}
          windowType={null}
          isWeb={null}
          data={null}
        />
      </Desktop>
      <BottomBar />
    </AppContainer>
  );
}
