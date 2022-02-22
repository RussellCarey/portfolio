import { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../theme/Theme";
import ThemeContext from "../../../context/theme/themeContext";
import { BlogPostContainer, BlogPostData, BlogPostImage } from "./styles/styled";

interface IBlogPostProps {
  data: any;
  onClick: any;
}

const TitleText = styled.h5`
  font-size: ${theme.font.fontsizes.h5};
  margin-bottom: ${theme.spacing.space.small};
`;

const SmallText = styled.p`
  font-size: ${theme.font.fontsizes.xSmall};
  color: grey;
`;

const Text = styled.p`
  font-size: ${theme.font.fontsizes.text};
  margin-top: ${theme.spacing.space.small};
`;

const BlogImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
  filter: grayscale(100%);
`;

const BlogPost: FunctionComponent<IBlogPostProps> = ({ data, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <BlogPostContainer themeState={theme} onClick={onClick}>
      <BlogPostImage image={data.cover_image}>
        <BlogImage src={data.cover_image} />
      </BlogPostImage>
      <BlogPostData>
        <TitleText>{data.title}</TitleText>
        <SmallText>Reading time: {data.reading_time_minutes} mins</SmallText>
        <Text>{data.description}</Text>
      </BlogPostData>
    </BlogPostContainer>
  );
};

export default BlogPost;
