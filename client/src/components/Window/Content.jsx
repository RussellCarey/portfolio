import WindowContextContainer from "./styles/styled";

export default function WindowContent({ themeState, children }) {
  return <WindowContextContainer themeState={themeState}>{children}</WindowContextContainer>;
}
