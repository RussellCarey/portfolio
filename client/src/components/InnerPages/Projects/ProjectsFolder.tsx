import { FunctionComponent, useEffect, useState, useContext } from "react";
import { Container } from "./styles/styled";
import { IProjectsPageProps } from "./types/types";
import ThemeContext from "../../../context/theme/themeContext";

import { getDocumentsByTag } from "./services/projectServices";
import { EPageNames, EWindowTypes } from "../../../interfaces/types";
import Icon from "../../Icons/Index";
import Loading from "../../Desktop/Spinner";

const ProjectsPage: FunctionComponent<IProjectsPageProps> = ({ themeState, data }) => {
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [projects, setProjects] = useState<any | null>(null);
  const { theme } = useContext(ThemeContext);

  const getAndSetProjects = async () => {
    const projects = await getDocumentsByTag("projects");
    // Error check?
    setProjects(projects);
    setIsLoading(false);
  };

  useEffect(() => {
    getAndSetProjects();
  }, []);

  return (
    <Container>
      {isLoading ? <Loading /> : null}
      {/* {isLoading} ------- SHOW LOADING ANIMATION ETC.. */}
      {projects
        ? projects.map((p: any) => {
            return (
              <Icon
                isProject={true}
                data={p}
                themeState={theme}
                text={p.data.project_name[0].text}
                pageName={EPageNames.project}
                windowType={EWindowTypes.noSidebar}
                aniDelay={0}
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
