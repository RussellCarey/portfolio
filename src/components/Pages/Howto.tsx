import { FunctionComponent } from "react";
import { Container, Text } from "./styles/howto.styles";

interface IHowToProps {
  themeState: any;
}

const HowtoPage: FunctionComponent<IHowToProps> = ({ themeState }) => {
  return (
    <Container themeState={themeState}>
      <Text>Hello there! Thanks for visiting my little portfolio website</Text>
      <Text>
        To use this website you can click and double click on the desktop icons, you can also right click them to bring
        up a menu.{" "}
      </Text>
      <Text>There is a start menu avaialble at the bottom with some misc settings.</Text>
      <Text>
        You can move the windows by dragging them from the top and resize them by dragging from the bottom right corner.
      </Text>
      <Text>You can close any window by press the button in the top left.</Text>
      <Text>Thanks</Text>
    </Container>
  );
};

export default HowtoPage;
