import ThemeState from "./context/theme/themeState";
import Home from "./main";

function App() {
  return (
    <ThemeState>
      <Home />
    </ThemeState>
  );
}

export default App;
