import { useContext } from "react";
import ThemeContext from "../../../context/theme/themeContext";
import { BlogPostContainer, BlogPostData, BlogPostImage } from "./styles/styled";

const BlogPost = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <BlogPostContainer themeState={theme}>
      <BlogPostImage />
      <BlogPostData />
    </BlogPostContainer>
  );
};

export default BlogPost;
