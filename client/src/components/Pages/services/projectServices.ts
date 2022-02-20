import prismicClient from "../../../utils/prismic";

export const getAllProjects = async () => {
  try {
    const prismicDocs = await prismicClient.getAllByTag("projects");
    console.log(prismicDocs);
    return prismicDocs;
  } catch (error: any) {
    console.log(error.response);
    return error.response;
  }
};
