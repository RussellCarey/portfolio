import styled from "styled-components";
import { theme } from "../../../../theme/Theme";
import { IStyledProps } from "../../../../interfaces/types";

export const BlogPostContainer = styled.div`
  width: 250px;
  height: 300px;

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
  height: 100%;
`;

export const BlogPostData = styled.div`
  width: 100%;
  height: 150px;
  border-top: solid 5px black;
`;

export const SideBar = styled.div`
  width: 200px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

export const BlogPostsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;

  border-left: solid 5px black;
`;
