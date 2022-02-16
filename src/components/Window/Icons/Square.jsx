import { SquareIcon, SquareIconImg } from "./styles/styled";

export default function WindowIconSquare({ img, themeState }) {
  return (
    <SquareIcon themeState={themeState}>
      <SquareIconImg themeState={themeState} width={"50%"} height={"50%"} src={img} alt="project icon" />
    </SquareIcon>
  );
}
