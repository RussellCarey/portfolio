import { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import { IStyledProps } from "../../../interfaces/types";
import { theme } from "../../../theme/Theme";
import ThemeContext from "../../../context/theme/themeContext";
import { BlogPostContainer, BlogPostData, BlogPostImage } from "./styles/styled";
import { IBlogPostProps } from "./types/interfaces";

const TitleText = styled.h5`
  color: ${(props: IStyledProps) => props.themeState.textColor};
  font-size: ${theme.font.fontsizes.h5};
  margin-bottom: ${theme.spacing.space.small};
`;

const SmallText = styled.p`
  font-size: ${theme.font.fontsizes.xSmall};
  color: grey;
`;

const Text = styled.p`
  color: ${(props: IStyledProps) => props.themeState.textColor};
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
      <BlogPostData themeState={theme}>
        <TitleText themeState={theme}>{data.title}</TitleText>
        <SmallText>Reading time: {data.reading_time_minutes} mins</SmallText>
        <Text themeState={theme}>{data.description}</Text>
      </BlogPostData>
    </BlogPostContainer>
  );
};

export default BlogPost;
