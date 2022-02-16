import { FunctionComponent } from "react";
import Git from "../../svg/github.svg";
import Twitter from "../../svg/twitter.svg";
import Blog from "../../svg/comment-regular.svg";
import { ReactComponent as About } from "../../svg/user-regular.svg";
import Projects from "../../svg/code-solid.svg";
import Info from "../../svg/question-solid.svg";
import Contact from "../../svg/envelope-regular.svg";
import { IIconSquareProps } from "./types/interfaces";
import { IconButton } from "./styles/styled";

const IconSquare: FunctionComponent<IIconSquareProps> = ({ label, themeState }) => {
  return (
    <IconButton themeState={themeState}>
      {label === "git" ? <Git /> : null}
      {label === "twitter" ? <Twitter></Twitter> : null}
      {label === "blog" ? <Blog /> : null}
      {label === "about" ? <About style={{ height: "100%" }} /> : null}
      {label === "projects" ? <Projects></Projects> : null}
      {label === "info" ? <Info></Info> : null}
      {label === "contact" ? <Contact></Contact> : null}
    </IconButton>
  );
};

export default IconSquare;
