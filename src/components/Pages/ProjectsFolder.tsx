import { FunctionComponent, useEffect, useState, useContext } from "react";
import { Container } from "./styles/project.styles";
import { IProjectsPageProps } from "./types/interfaces";
import ThemeContext from "../../context/theme/themeContext";

import { getAllProjects } from "./services/projectServices";
import { EPageNames, EWindowTypes } from "../../interfaces/types";
import Icon from "../Icons/Index";

const ProjectsPage: FunctionComponent<IProjectsPageProps> = ({ themeState, data }) => {
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [projects, setProjects] = useState<any | null>(null);
  const { theme } = useContext(ThemeContext);

  const getAndSetProjects = async () => {
    const projects = await getAllProjects();
    // Error check?
    setProjects(projects);
    setIsLoading(false);
  };

  useEffect(() => {
    getAndSetProjects();
  }, []);

  return (
    <Container>
      {/* {isLoading} ------- SHOW LOADING ANIMATION ETC.. */}
      {projects && projects.length > 0
        ? projects.map((p: any) => {
            return (
              <Icon
                data={p}
                themeState={theme}
                text={p.data.project_name[0].text}
                pageName={EPageNames.project}
                windowType={EWindowTypes.noSidebar}
                aniDelay={0.3}
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
