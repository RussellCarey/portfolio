import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../../context/theme/themeContext";
import { PageContainer, BlogPostsContainer } from "./styles/styled";

import BlogPost from "./BlogPost";
import BlogSidebar from "./BlogSideBar";

import { fetchBlogPosts } from "./services/fetchServices";

const BlogPage = () => {
  const { theme } = useContext(ThemeContext);
  const [blogPosts, setBlogPosts] = useState<Array<any>>();

  const fetchLast30BlogPosts = async () => {
    const posts = await fetchBlogPosts();
    console.log(posts);
    setBlogPosts(posts);
  };

  const goToBlogPage = (data: any) => {
    return window.open(`${data.url}`, "_blank");
  };

  useEffect(() => {
    fetchLast30BlogPosts();
  }, []);

  return (
    <PageContainer>
      <BlogSidebar />
      <BlogPostsContainer themeState={theme}>
        {blogPosts
          ? blogPosts.map((post) => {
              return <BlogPost data={post} onClick={() => goToBlogPage(post)} />;
            })
          : null}
      </BlogPostsContainer>
    </PageContainer>
  );
};

export default BlogPage;
