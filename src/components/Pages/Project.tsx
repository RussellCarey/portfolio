import { FunctionComponent, useEffect } from "react";
import { Container } from "./styles/project.styles";
// import WindowIcon from "../Window/Icons/WindowIcon";
import { IProjectsPageProps } from "./types/interfaces";

const ProjectsPage: FunctionComponent<IProjectsPageProps> = ({ themeState, data }) => {
  return (
    <Container>
      {/* Return the icons for the projects */}
      {/* {data &&
        data.map((project: any) => {
          return (
            <WindowIcon
              key={project.label}
              data={project}
              img={"/svg/file-regular.svg"}
              label={project.label}
              themeState={themeState}
            ></WindowIcon>
          );
        })} */}
    </Container>
  );
};
