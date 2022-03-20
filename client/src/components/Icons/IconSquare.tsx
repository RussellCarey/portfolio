import { FunctionComponent } from "react";
import { IconLetterLogo } from "./styles/styled";
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
  LinkedInSVG,
  ThreeDeeSVG,
} from "./styles/styled";

//
const IconSquareMain: FunctionComponent<IIconSquareProps> = ({ name, label, themeState, isProject }) => {
  return !isProject ? (
    <IconSquare themeState={themeState}>
      {label === EPageNames.github ? <GitSVG themeState={themeState} /> : null}
      {label === EPageNames.twitter ? <TwitterSVG themeState={themeState} /> : null}
      {label === EPageNames.blog ? <BlogSVG themeState={themeState} /> : null}
      {label === EPageNames.about ? <AboutSVG themeState={themeState} /> : null}
      {label === EPageNames.projects ? <ProjectsSVG themeState={themeState} /> : null}
      {label === EPageNames.contact ? <ContactSVG themeState={themeState} /> : null}
      {label === EPageNames.linkedin ? <LinkedInSVG themeState={themeState} /> : null}
      {label === EPageNames.threedee ? <ThreeDeeSVG themeState={themeState} /> : null}
    </IconSquare>
  ) : (
    <IconSquare themeState={themeState}>
      <IconLetterLogo themeState={themeState}>{name.slice(0, 1).toUpperCase()}</IconLetterLogo>
    </IconSquare>
  );
};

export default IconSquareMain;
