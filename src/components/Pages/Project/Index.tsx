import { useContext } from "react";
import ThemeContext from "../../../context/theme/themeContext";
import { FunctionComponent } from "react";
import { IProjectsPageProps } from "../types/interfaces";
import { ProjectContainer } from "./styles/styled";
import TextSide from "./TextSide";
import ImageSide from "./ImageSide";

const ProjectPage: FunctionComponent<IProjectsPageProps> = ({ themeState, data, dimensions }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ProjectContainer dimensions={dimensions} themeState={themeState}>
      <ImageSide data={data} themeState={theme} dimensions={dimensions} />
      <TextSide data={data} dimensions={dimensions} themeState={themeState} />
    </ProjectContainer>
  );
};

export default ProjectPage;
