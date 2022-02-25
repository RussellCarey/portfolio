import { FunctionComponent } from "react";

import { PaleText, Text } from "../styles/styled";
import { ISubTitleProps } from "./types/types";
import { TitleContainer } from "./styles/styled";

const SubTitle: FunctionComponent<ISubTitleProps> = ({ leftText, rightText }) => {
  return (
    <TitleContainer>
      <PaleText>{leftText}</PaleText>
      <Text>{rightText}</Text>
    </TitleContainer>
  );
};

export default SubTitle;
