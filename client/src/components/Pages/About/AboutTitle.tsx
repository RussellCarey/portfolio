import { FunctionComponent } from "react";

import { ITitleProps } from "../Project/types/types";
import { MainTitleContainer } from "../Project/styles/styled";
import { TitleText } from "../Project/styles/styled";

//! Animated the logo to show it can be clicked..
const AboutTitle: FunctionComponent<ITitleProps> = ({ text }) => {
  return (
    <MainTitleContainer>
      <TitleText>{text}</TitleText>
    </MainTitleContainer>
  );
};

export default AboutTitle;
