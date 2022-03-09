import { FunctionComponent, useContext, useEffect, useState } from "react";
import ThemeContext from "../../../context/theme/themeContext";
import { PageContainer } from "./styles/styled";

import BlogPost from "./BlogPost";

import { fetchBlogPosts } from "./services/fetchServices";
import Loading from "../../Spinners/Spinner";

interface IBlogPageProps {
  dimensions: { width: number; height: number };
}

const BlogPage: FunctionComponent<IBlogPageProps> = ({ dimensions }) => {
  const { theme } = useContext(ThemeContext);
  const [blogPosts, setBlogPosts] = useState<Array<any>>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchLast30BlogPosts = async () => {
    const posts = await fetchBlogPosts();
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
    <PageContainer dimensions={dimensions} themeState={theme}>
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
