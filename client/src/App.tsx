import "./App.css";
import ThemeState from "./context/theme/themeState";
import WindowState from "./context/window/windowState";
import Home from "./components/InnerPages/Desktop/main";

function App() {
  return (
    <ThemeState>
      <WindowState>
        <Home />
      </WindowState>
    </ThemeState>
  );
}

export default App;
