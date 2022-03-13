import prismicClient from "../../../utils/prismic";
import { FunctionComponent, useEffect, useState } from "react";
import { Container } from "../Projects/styles/styled";

import { EPageNames, EWindowTypes } from "../../../interfaces/types";
import Icon from "../../Icons/Index";
import Loading from "../../Spinners/Spinner";

interface IPropsImagePage {
  data: any;
}

const ImagesPage: FunctionComponent<IPropsImagePage> = ({ data }) => {
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<any | null>(null);

  const getAndSetProjects = async () => {
    try {
      const prismicDocs = await prismicClient.getAllByTag("3d");
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
        ? projects.map((image: any) => {
            return (
              <Icon
                isProject={true}
                data={image}
                text={image.data.name[0].text}
                pageName={EPageNames.image}
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

export default ImagesPage;
