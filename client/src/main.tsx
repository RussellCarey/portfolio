import { useContext, useState } from "react";
import { AppContainer } from "./styles/styled";
import { isMobile } from "react-device-detect";

import ThemeContext from "./context/theme/themeContext";
import WindowContext from "./context/window/windowContext";

import { IWindowObject } from "./interfaces/types";
import { EWindowTypes } from "./interfaces/types";
import { EPageNames } from "./interfaces/types";

import LoginPage from "./components/Login";

import Icon from "./components/Icons/Index";
import BottomBar from "./components/BottomBar/Index";
import Window from "./components/Window/Index";
import { DesktopContainer } from "./components/InnerPages/styles/styled";

export default function Home() {
  const [loggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const viewport = window.visualViewport;
  const { theme } = useContext(ThemeContext);
  const { windowState } = useContext(WindowContext);

  return (
    <AppContainer themeState={theme} mobileHeight={viewport.height} isMobile={isMobile}>
      {!loggedIn ? (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <p style={{ position: "absolute", top: 10, right: 10 }}>
            CURRENTLY UNDER CONSTRUCTION - SHOULD BE FINISHED SOON! CHECK BACK LATER :)
          </p>
          <DesktopContainer>
            <Icon
              themeState={theme}
              pageName={EPageNames.about}
              data={null}
              text={EPageNames.about}
              windowType={EWindowTypes.sidebar}
              aniDelay={0.1}
              isWeb={null}
              isProject={false}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
            />

            <Icon
              themeState={theme}
              pageName={EPageNames.projects}
              data={null}
              text={EPageNames.projects}
              windowType={EWindowTypes.sidebar}
              aniDelay={0.4}
              isWeb={null}
              isProject={false}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
            />

            <Icon
              themeState={theme}
              pageName={EPageNames.blog}
              data={null}
              text={EPageNames.blog}
              windowType={EWindowTypes.noSidebar}
              aniDelay={0.7}
              isWeb={null}
              isProject={false}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
            />

            <Icon
              themeState={theme}
              pageName={EPageNames.contact}
              data={null}
              text={EPageNames.contact}
              windowType={EWindowTypes.sidebar}
              aniDelay={0.9}
              isWeb={null}
              isProject={false}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
            />

            <Icon
              themeState={theme}
              pageName={EPageNames.twitter}
              data={null}
              text={EPageNames.twitter}
              windowType={EWindowTypes.noSidebar}
              aniDelay={1.1}
              isProject={false}
              isWeb={"https://www.twitter.com/russellcareyy"}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
            />

            <Icon
              themeState={theme}
              pageName={EPageNames.github}
              data={null}
              text={EPageNames.github}
              windowType={EWindowTypes.noSidebar}
              aniDelay={1.2}
              isProject={false}
              isWeb={"https://www.github.com/russellcarey"}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
            />

            <Icon
              themeState={theme}
              pageName={EPageNames.linkedin}
              data={null}
              text={EPageNames.linkedin}
              windowType={EWindowTypes.noSidebar}
              aniDelay={1.3}
              isProject={false}
              isWeb={"https://www.linkedin.com/in/russell-carey-b199bb19a/"}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
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
