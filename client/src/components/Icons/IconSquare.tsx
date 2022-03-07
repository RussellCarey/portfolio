import { FunctionComponent } from "react";

// import { ReactComponent as Git } from "../../svg/github.svg";
import { ReactComponent as Twitter } from "../../svg/twitter.svg";
import { ReactComponent as Blog } from "../../svg/comment-regular.svg";
import { ReactComponent as About } from "../../svg/user-regular.svg";
import { ReactComponent as Projects } from "../../svg/code-solid.svg";
import { ReactComponent as Contact } from "../../svg/envelope-regular.svg";
import { ReactComponent as Linkedin } from "../../svg/linkedin.svg";

import { IIconSquareProps } from "./types/interfaces";
import { EPageNames } from "../../interfaces/types";
import { IconSquare, SVG } from "./styles/styled";

const IconSquareMain: FunctionComponent<IIconSquareProps> = ({ name, label, themeState, isProject }) => {
  return !isProject ? (
    <IconSquare themeState={themeState}>
      {label === EPageNames.github ? <SVG xmlns="../../svg/github.svg"></SVG> : null}
      {label === EPageNames.twitter ? <Twitter /> : null}
      {label === EPageNames.blog ? <Blog /> : null}
      {label === EPageNames.about ? <About /> : null}
      {label === EPageNames.projects ? <Projects /> : null}
      {label === EPageNames.contact ? <Contact /> : null}
      {label === EPageNames.linkedin ? <Linkedin /> : null}
    </IconSquare>
  ) : (
    <IconSquare themeState={themeState}>
      <h1>{name.slice(0, 1).toUpperCase()}</h1>
    </IconSquare>
  );
};

export default IconSquareMain;
