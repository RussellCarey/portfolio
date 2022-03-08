import prismicClient from "../../../utils/prismic";
import { useContext, useState, useEffect } from "react";
import ThemeContext from "../../../context/theme/themeContext";

import { FunctionComponent } from "react";
import { IAboutPageProps } from "./types/types";
import { ProjectContainer } from "../Project/styles/styled";

import ImageSide from "../Project/ImageSide";
import AboutTextSide from "./AboutTextSide";
import Loading from "../../Desktop/Spinner";

const ProjectPage: FunctionComponent<IAboutPageProps> = ({ themeState, dimensions }) => {
  const { theme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [aboutData, setAboutData] = useState<any | null>(null);

  const loadAboutData = async () => {
    try {
      const aboutDocument = await prismicClient.getAllByTag("about");
      setAboutData(aboutDocument);
      setIsLoading(false);
    } catch (error: any) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    loadAboutData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <ProjectContainer dimensions={dimensions} themeState={themeState}>
      {!isLoading ? <ImageSide data={aboutData} themeState={theme} dimensions={dimensions} /> : null}
      {!isLoading ? <AboutTextSide data={aboutData} dimensions={dimensions} themeState={themeState} /> : null}
    </ProjectContainer>
  );
};

export default ProjectPage;
