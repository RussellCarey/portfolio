import { FunctionComponent } from "react";

import { IIconSquareProps } from "./types/interfaces";
import { EPageNames } from "../../interfaces/types";
import {
  IconSquare,
  GitSVG,
  TwitterSVG,
  BlogSVG,
  AboutSVG,
  ProjectsSVG,
  ContactSVG,
  LinkedinSVG,
} from "./styles/styled";

const IconSquareMain: FunctionComponent<IIconSquareProps> = ({ name, label, themeState, isProject }) => {
  return !isProject ? (
    <IconSquare themeState={themeState}>
      {label === EPageNames.github ? <GitSVG /> : null}
      {label === EPageNames.twitter ? <TwitterSVG /> : null}
      {label === EPageNames.blog ? <BlogSVG /> : null}
      {label === EPageNames.about ? <AboutSVG /> : null}
      {label === EPageNames.projects ? <ProjectsSVG /> : null}
      {label === EPageNames.contact ? <ContactSVG /> : null}
      {label === EPageNames.linkedin ? <LinkedinSVG /> : null}
    </IconSquare>
  ) : (
    <IconSquare themeState={themeState}>
      <h1>{name.slice(0, 1).toUpperCase()}</h1>
    </IconSquare>
  );
};

export default IconSquareMain;
