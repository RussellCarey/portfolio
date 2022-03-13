import { useContext, useState, useRef } from "react";
import { AppContainer } from "./styles/styled";
import { isMobile } from "react-device-detect";

import ThemeContext from "./context/theme/themeContext";
import WindowContext from "./context/window/windowContext";

import Canvas from "./components/Canvas/Index";

import { IWindowObject } from "./interfaces/types";
import { EWindowTypes } from "./interfaces/types";
import { EPageNames } from "./interfaces/types";

import { DesktopContainer } from "./components/InnerPages/styles/styled";
import Icon from "./components/Icons/Index";
import BottomBar from "./components/BottomBar/Index";
import Window from "./components/Window/Index";
import LoginPage from "./components/Login";

export default function Home() {
  const viewport = window.visualViewport;
  const { theme } = useContext(ThemeContext);
  const { windowState } = useContext(WindowContext);

  const [loggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const canvasRef = useRef<any>();
  const [canDraw, setCanDraw] = useState<boolean>(false);

  return (
    <AppContainer themeState={theme} mobileHeight={viewport.height} isMobile={isMobile}>
      {!loggedIn ? (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <DesktopContainer>
            {!isMobile ? <Canvas canvasRef={canvasRef} canDraw={canDraw} setCanDraw={setCanDraw} /> : null}
            <Icon
              pageName={EPageNames.about}
              text={EPageNames.about}
              windowType={EWindowTypes.sidebar}
              aniDelay={0.1}
              isWeb={null}
              isProject={false}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              data={null}
            />

            <Icon
              pageName={EPageNames.projects}
              text={EPageNames.projects}
              windowType={EWindowTypes.sidebar}
              aniDelay={0.4}
              isWeb={null}
              isProject={false}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              data={null}
            />

            <Icon
              pageName={EPageNames.blog}
              text={EPageNames.blog}
              windowType={EWindowTypes.noSidebar}
              aniDelay={0.7}
              isWeb={null}
              isProject={false}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              data={null}
            />

            <Icon
              pageName={EPageNames.contact}
              text={EPageNames.contact}
              windowType={EWindowTypes.sidebar}
              aniDelay={0.9}
              isWeb={null}
              isProject={false}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              data={null}
            />

            <Icon
              pageName={EPageNames.twitter}
              text={EPageNames.twitter}
              windowType={EWindowTypes.noSidebar}
              aniDelay={1.1}
              isProject={false}
              isWeb={"https://www.twitter.com/russellcareyy"}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              data={null}
            />

            <Icon
              pageName={EPageNames.github}
              text={EPageNames.github}
              windowType={EWindowTypes.noSidebar}
              aniDelay={1.2}
              isProject={false}
              isWeb={"https://www.github.com/russellcarey"}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              data={null}
            />

            <Icon
              pageName={EPageNames.linkedin}
              text={EPageNames.linkedin}
              windowType={EWindowTypes.noSidebar}
              aniDelay={1.3}
              isProject={false}
              isWeb={"https://www.linkedin.com/in/russell-carey-b199bb19a/"}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              data={null}
            />

            {windowState.windows && windowState.windows.length > 0
              ? windowState.windows.map((w: IWindowObject) => {
                  return (
                    <Window
                      key={w.id}
                      pageName={w.pageName}
                      themeState={theme}
                      id={w.id}
                      windowType={w.windowType}
                      data={w.data}
                      windowList={windowState.windows}
                    />
                  );
                })
              : null}
          </DesktopContainer>
          <BottomBar />
        </>
      )}
    </AppContainer>
  );
}
