import { useEffect, useRef } from "react";
import Title from "./Title";
import SubTitle from "./Subtitle";
import Description from "./Description";
import { FunctionComponent } from "react";

import { TextSideContainer } from "./styles/styled";
import { ITextSideProps } from "./types/types";

const TextSide: FunctionComponent<ITextSideProps> = ({ data, dimensions, themeState }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) container.current!.focus();
  }, [container]);

  return (
    <TextSideContainer ref={container} dimensions={dimensions} themeState={themeState}>
      <Title text={data.data.project_name[0].text} github={data.data.github.url} website={data.data.online.url} />
      <SubTitle leftText={"created with"} rightText={data.data.createdwith[0].text} />
      <SubTitle leftText={"more"} rightText={data.data.more[0].text} />
      <SubTitle leftText={"other"} rightText={data.data.other[0].text} />
      <Description data={data} />
    </TextSideContainer>
  );
};

export default TextSide;
