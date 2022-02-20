import { FunctionComponent, useState } from "react";

import { IYoutubeEmbed } from "./types/types";
import { VideoContainer, IFrameContainer } from "./styles/styled";

const YoutubeEmbed: FunctionComponent<IYoutubeEmbed> = ({ id, themeState }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <VideoContainer themeState={themeState} hovered={hovered}>
      <IFrameContainer
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      />
    </VideoContainer>
  );
};

export default YoutubeEmbed;
