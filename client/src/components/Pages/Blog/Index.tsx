import { useContext } from "react";
import ThemeContext from "../../../context/theme/themeContext";
import { PageContainer, BlogPostsContainer } from "./styles/styled";

import BlogPost from "./BlogPost";
import BlogSidebar from "./BlogSideBar";

const BlogPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <PageContainer>
      <BlogSidebar />
      <BlogPostsContainer>
        <BlogPost />
      </BlogPostsContainer>
    </PageContainer>
  );
};

export default BlogPage;
