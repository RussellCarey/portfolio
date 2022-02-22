import { FunctionComponent, useContext } from "react";
import ThemeContext from "../../../context/theme/themeContext";
import { BlogPostContainer, BlogPostData, BlogPostImage } from "./styles/styled";

interface IBlogPostProps {
  data: any;
  onClick: any;
}

const BlogPost: FunctionComponent<IBlogPostProps> = ({ data, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <BlogPostContainer themeState={theme} onClick={onClick}>
      <BlogPostImage />
      <BlogPostData>
        <h5>{data.title}</h5>
        <p>{data.published_at}</p>
        <p>Reading time: {data.reading_time_minutes} mins</p>
        <p>{data.description}</p>
      </BlogPostData>
    </BlogPostContainer>
  );
};

export default BlogPost;
