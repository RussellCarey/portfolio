import { useEffect, useRef } from "react";
import AboutTitle from "./AboutTitle";
import SubTitle from "../Project/Subtitle";
import AboutDescription from "./AboutDescription";
import { FunctionComponent } from "react";
import { TextSideContainer } from "../Project/styles/styled";
import { ITextSideProps } from "../Project/types/types";

const AboutTextSide: FunctionComponent<ITextSideProps> = ({ data, dimensions, themeState }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) container.current!.focus();
  }, [container]);

  return (
    <TextSideContainer ref={container} dimensions={dimensions} themeState={themeState}>
      <AboutTitle text={data.data.project_name[0].text} github={null} website={null} />
      <SubTitle leftText={"i'm working with"} rightText={data.data.more[0].text} />
      <SubTitle leftText={"currently learning"} rightText={data.data.other[0].text} />
      <AboutDescription data={data} />
    </TextSideContainer>
  );
};

export default AboutTextSide;
