import { FunctionComponent } from "react";
import Git from "../../svg/github.svg";
import Twitter from "../../svg/twitter.svg";
import Blog from "../../svg/comment-regular.svg";
import About from "../../svg/user-regular.svg";
import Projects from "../../svg/code-solid.svg";
import Info from "../../svg/question-solid.svg";
import Contact from "../../svg/envelope-regular.svg";
import { IIconSquareProps } from "./types/interfaces";
import { IconButton } from "./styles/styled";

const IconSquare: FunctionComponent<IIconSquareProps> = ({ img, themeState }) => {
  return (
    <IconButton themeState={themeState}>
      {img === "git" ? <Git /> : null}
      {img === "twitter" ? <Twitter></Twitter> : null}
      {img === "blog" ? <Blog></Blog> : null}
      {img === "about" ? <About /> : null}
      {img === "projects" ? <Projects></Projects> : null}
      {img === "info" ? <Info></Info> : null}
      {img === "contact" ? <Contact></Contact> : null}
    </IconButton>
  );
};

export default IconSquare;
