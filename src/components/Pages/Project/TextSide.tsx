import styled from "styled-components";
import { theme } from "../../../theme/Theme";

import Title from "./Title";
import SubTitle from "./Subtitle";
import Description from "./Description";
import { FunctionComponent } from "react";

const TextSideContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: ${theme.spacing.space.small};

  display: flex;
  flex-direction: column;
`;

interface ITextSideProps {
  data: any;
}

const TextSide: FunctionComponent<ITextSideProps> = ({ data }) => {
  return (
    <TextSideContainer>
      <Title text={data.data.project_name[0].text} />
      <SubTitle leftText={"created with"} rightText={data.data.createdwith[0].text} />
      <SubTitle leftText={"more"} rightText={data.data.more[0].text} />
      <SubTitle leftText={"other"} rightText={data.data.other[0].text} />
      <Description data={data} />
    </TextSideContainer>
  );
};

export default TextSide;
