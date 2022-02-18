import styled from "styled-components";
import { theme } from "../../../theme/Theme";

import Title from "./Title";
import SubTitle from "./Subtitle";
import { FunctionComponent } from "react";

const ImageSideContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: ${theme.spacing.space.small};

  display: flex;
  flex-direction: column;
`;

interface IImageSideProps {
  data: any;
}

const ImageSide: FunctionComponent<IImageSideProps> = ({ data }) => {
  return <ImageSideContainer></ImageSideContainer>;
};

export default ImageSide;
