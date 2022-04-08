import prismicClient from "../../../utils/prismic";
import { useContext, useState, useEffect } from "react";
import ThemeContext from "../../../context/theme/themeContext";

import { onPageView } from "../../../utils/googleAna";

import { FunctionComponent } from "react";
import { ProjectContainer } from "../Project/styles/styled";

import Loading from "../../Spinners/Spinner";
import { IThemeState } from "../../../context/theme/types";

import { MessageContainer, Title, SubTitle, Text } from "./styles/styled";

interface IFirstProps {
  themeState: IThemeState;
  dimensions: { width: number; height: number };
}

const FirstPage: FunctionComponent<IFirstProps> = ({ dimensions }) => {
  const { theme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [aboutData, setAboutData] = useState<any | null>(null);

  const loadAboutData = async () => {
    try {
      const aboutDocument = await prismicClient.getAllByTag("about");
      setAboutData(aboutDocument[0]);
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    onPageView("about");
    loadAboutData();
  }, []);

  return (
    <MessageContainer>
      <SubTitle> Hi, I'm Russell Carey and I build things for the web!</SubTitle>
      <Text>
        I’m a Tokyo-based software engineer and art graduate who specialises in building exciting front-end
        applications, back-end applications and digital experiences.
      </Text>
      <Text>I am currently studying a Bsc Computer Science degree through the University of London online.</Text>
      <Text>
        My interest in programming started in 2019 where I set out to build a rhythm music game using Unity but quickly
        found a love for combining design and the digital via Web Development!
      </Text>
      <Text>
        I have recently been working with (amongst other things): Javascript, React, Node.js, Next.js, Express,
        Typescript, Jest and a little PHP and Laravel!
      </Text>
      <Text> You can move windows by dragging from the top and resize them from the bottom right!</Text>
      <Text>Close windows using the top left X button.</Text>
    </MessageContainer>
  );
};

export default FirstPage;
