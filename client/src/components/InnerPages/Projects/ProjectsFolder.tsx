import prismicClient from "../../../utils/prismic";
import { FunctionComponent, useEffect, useState } from "react";
import { Container } from "./styles/styled";
import { IProjectsPageProps } from "./types/types";

import { EPageNames, EWindowTypes } from "../../../interfaces/types";
import Icon from "../../Icons/Index";
import Loading from "../../Spinners/Spinner";

const ProjectsPage: FunctionComponent<IProjectsPageProps> = ({ data }) => {
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<any | null>(null);

  const getAndSetProjects = async () => {
    try {
      const prismicDocs = await prismicClient.getAllByTag("projects");
      setProjects(prismicDocs);
      setIsLoading(false);
    } catch (error: any) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getAndSetProjects();
  }, []);

  return (
    <Container>
      {isLoading ? <Loading /> : null}
      {projects
        ? projects.map((project: any, ind: number) => {
            return (
              <Icon
                isProject={true}
                data={project}
                text={project.data.project_name[0].text}
                pageName={EPageNames.project}
                windowType={EWindowTypes.noSidebar}
                aniDelay={0.2 * ind}
                isWeb={null}
                selectedIcon={selectedIcon}
                setSelectedIcon={setSelectedIcon}
              />
            );
          })
        : null}
    </Container>
  );
};

export default ProjectsPage;
