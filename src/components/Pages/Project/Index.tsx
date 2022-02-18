import styled from "styled-components";
import { FunctionComponent, useEffect } from "react";
import { IProjectsPageProps } from "../types/interfaces";

import TextSide from "./TextSide";
import ImageSide from "./ImageSide";

const Container = styled.div`
  display: flex;
`;

const ProjectPage: FunctionComponent<IProjectsPageProps> = ({ themeState, data }) => {
  return (
    <Container>
      <ImageSide data={data} />
      <TextSide data={data} />
    </Container>
  );
};

export default ProjectPage;
