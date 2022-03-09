import styled from "styled-components";
import { theme } from "../../../../theme/Theme";
import { IStyledProps } from "../../../../interfaces/types";
import { IStyledWithDimensionsProps } from "../../../../interfaces/types";
import { IBlogImageProps } from "../types/interfaces";

export const BlogPostContainer = styled.div`
  width: 300px;
  height: max-content;

  display: flex;
  flex-direction: column;

  border-radius: ${theme.iconSize.borderRadius};
  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border: ${theme.sizing.borderThickness} solid ${(props: IStyledProps) => props.themeState.borderColor};
  outline: none;
  box-shadow: 3px 4px 0 ${(props) => props.themeState.borderColor};

  margin: ${theme.spacing.space.medium};

  transition: all 0.3s;

  &:hover {
    transform: scale(101.5%);
    cursor: pointer;
    box-shadow: 5px 6px 0 ${(props) => props.themeState.borderColor};
  }
`;

export const BlogPostImage = styled.div`
  width: 100%;
  height: max-content;
  filter: grayscale(100%);
  background-image: url(${(props: IBlogImageProps) => props.image});
  border-radius: 15px 15px 0 0;
  background-size: cover;
`;

export const BlogPostData = styled.div`
  width: 100%;
  height: max-content;
  border-top: solid 5px ${(props: IStyledProps) => props.themeState.borderColor};

  padding: ${theme.spacing.space.small};
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: ${(props: IStyledWithDimensionsProps) => (props.dimensions.width < 800 ? "center" : "none")};
`;

export const BlogPostsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;

  border-left: solid 5px ${(props: IStyledProps) => props.themeState.borderColor};
  color: ${(props: IStyledProps) => props.themeState.textColor};
`;
