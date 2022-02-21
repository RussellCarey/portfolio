import { useContext, useState, useEffect } from "react";
import { getDocumentsByTag } from "../services/projectServices";
import ThemeContext from "../../../context/theme/themeContext";
import { FunctionComponent } from "react";
import { IAboutPageProps } from "./types/types";
import { ProjectContainer } from "../Project/styles/styled";
import ImageSide from "../Project/ImageSide";
import AboutTextSide from "./AboutTextSide";

const ProjectPage: FunctionComponent<IAboutPageProps> = ({ themeState, dimensions }) => {
  const { theme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [aboutData, setAboutData] = useState();

  const loadAboutData = async () => {
    const aboutDocument = await getDocumentsByTag("about");
    setAboutData(aboutDocument[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadAboutData();
  }, []);

  return (
    <ProjectContainer dimensions={dimensions} themeState={themeState}>
      {!isLoading ? <ImageSide data={aboutData} themeState={theme} dimensions={dimensions} /> : null}
      {!isLoading ? <AboutTextSide data={aboutData} dimensions={dimensions} themeState={themeState} /> : null}
    </ProjectContainer>
  );
};

export default ProjectPage;
