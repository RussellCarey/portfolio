import { useContext, useState } from "react";
import { AppContainer } from "./styles/styled";

import ThemeContext from "./context/theme/themeContext";
import WindowContext from "./context/window/windowContext";

import { IWindowObject } from "./interfaces/types";
import { EWindowTypes } from "./interfaces/types";
import { EPageNames } from "./interfaces/types";

import Icon from "./components/Icons/Index";
import BottomBar from "./components/BottomBar/Index";
import Desktop from "./components/Pages/Desktop";
import Window from "./components/Window/Index";

export default function Home() {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const { theme } = useContext(ThemeContext);
  const { windowState } = useContext(WindowContext);

  return (
    <AppContainer themeState={theme}>
      <Desktop themeState={theme}>
        <Icon
          themeState={theme}
          pageName={EPageNames.about}
          data={null}
          text={EPageNames.about}
          windowType={EWindowTypes.sidebar}
          aniDelay={0.1}
          isWeb={null}
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
        />

        <Icon
          themeState={theme}
          pageName={EPageNames.projects}
          data={null}
          text={EPageNames.projects}
          windowType={EWindowTypes.sidebar}
          aniDelay={0.3}
          isWeb={null}
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
        />

        <Icon
          themeState={theme}
          pageName={EPageNames.blog}
          data={null}
          text={EPageNames.blog}
          windowType={EWindowTypes.noSidebar}
          aniDelay={0.5}
          isWeb={null}
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
        />

        <Icon
          themeState={theme}
          pageName={EPageNames.contact}
          data={null}
          text={EPageNames.contact}
          windowType={EWindowTypes.noSidebar}
          aniDelay={0.6}
          isWeb={null}
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
        />

        <Icon
          themeState={theme}
          pageName={EPageNames.twitter}
          data={null}
          text={EPageNames.twitter}
          windowType={EWindowTypes.noSidebar}
          aniDelay={0.7}
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
          aniDelay={0.8}
          isWeb={"https://www.github.com/russellcarey"}
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
      </Desktop>
      <BottomBar />
    </AppContainer>
  );
}
