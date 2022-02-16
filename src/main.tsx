import { useContext, useState } from "react";
import { AppContainer } from "./styles/styled";

import ThemeContext from "./context/theme/themeContext";
import WindowContext from "./context/window/windowContext";

import Icon from "./components/Icons/Index";
import BottomBar from "./components/BottomBar/Index";
import Desktop from "./components/Pages/Desktop";
import Window from "./components/Window/Index";

interface IWindowObject {
  id: number;
  label: string;
  pageName: string;
  windowType: string;
  isProject: boolean;
  windowList: any;
}

export default function Home() {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  const windowContext = useContext(WindowContext);
  const { windowState } = windowContext;

  return (
    <AppContainer themeState={theme}>
      <Desktop themeState={theme}>
        <Icon
          themeState={theme}
          pageName={"About"}
          label={"about"}
          aniDelay={0.1}
          isWeb={null}
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
        />

        {windowState.windows && windowState.windows.length > 0
          ? windowState.windows.map((w: IWindowObject) => {
              return (
                <Window
                  pageName={w.pageName}
                  themeState={theme}
                  id={w.id}
                  windowType={w.windowType}
                  data={null}
                  isProject={false}
                  windowList={null}
                />
              );
            })
          : null}
      </Desktop>
      <BottomBar />
    </AppContainer>
  );
}
