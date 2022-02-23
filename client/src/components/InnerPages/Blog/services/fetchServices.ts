export const fetchBlogPosts = async () => {
  const url = "https://dev.to/api/articles?username=russellcareyy";
  const posts = await fetch(url);
  const postJSON = await posts.json();
  return postJSON;
};
