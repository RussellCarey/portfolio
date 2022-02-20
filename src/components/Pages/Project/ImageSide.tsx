import { FunctionComponent } from "react";
import MainArea from "./MediaArea";
import { ImageSideContainer } from "./styles/styled";
import { IImageSideProps } from "./types/types";

const ImageSide: FunctionComponent<IImageSideProps> = ({ data, themeState, dimensions }) => {
  // const [selectedMedia, setSelectedMedia] = useState<number>(0);

  return (
    <ImageSideContainer>
      <MainArea data={data} themeState={themeState} dimensions={dimensions} />
    </ImageSideContainer>
  );
};

export default ImageSide;
