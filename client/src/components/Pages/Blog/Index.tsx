import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../../context/theme/themeContext";
import { PageContainer, BlogPostsContainer } from "./styles/styled";

import BlogPost from "./BlogPost";
import BlogSidebar from "./BlogSideBar";

import { fetchBlogPosts } from "./services/fetchServices";
import Loading from "../Loading";

const BlogPage = () => {
  const { theme } = useContext(ThemeContext);
  const [blogPosts, setBlogPosts] = useState<Array<any>>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchLast30BlogPosts = async () => {
    const posts = await fetchBlogPosts();
    console.log(posts);
    setBlogPosts(posts);
    setIsLoading(false);
  };

  const goToBlogPage = (data: any) => {
    return window.open(`${data.url}`, "_blank");
  };

  useEffect(() => {
    fetchLast30BlogPosts();
  }, []);

  return (
    <PageContainer>
      {isLoading ? <Loading /> : null}
      {blogPosts
        ? blogPosts.map((post) => {
            return <BlogPost data={post} onClick={() => goToBlogPage(post)} />;
          })
        : null}
    </PageContainer>
  );
};

export default BlogPage;
