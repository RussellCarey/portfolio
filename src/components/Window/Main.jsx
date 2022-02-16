import { MainWindowContainer } from "./styles/styled";

export default function WindowMain({ themeState, children }) {
  return <MainWindowContainer themeState={themeState}>{children}</MainWindowContainer>;
}
