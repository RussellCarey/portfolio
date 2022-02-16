import { WindowIconContainer, WindowIconText } from "./styles/styled";
import WindowIconSquare from "./Square";

export default function WindowIcon({ pageName, themeState, label, img, windowType, data }) {
  const onDoubleClickHandler = () => {
    // Function: pgname, label, id, theme, windowtype
    // createNewWindow(pageName, label, Math.floor(Math.random() * 100), themeState, windowType, data, true);
  };

  return (
    <WindowIconContainer className={"windowIcon"} onDoubleClick={onDoubleClickHandler}>
      <WindowIconSquare themeState={themeState} img={img} />
      <WindowIconText className={"iconText"} themeState={themeState}>
        {label}
      </WindowIconText>
    </WindowIconContainer>
  );
}
