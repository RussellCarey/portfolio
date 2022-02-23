import prismicClient from "../../../../utils/prismic";

export const getDocumentsByTag = async (tag: string) => {
  try {
    const prismicDocs = await prismicClient.getAllByTag(tag);
    console.log(prismicDocs);
    return prismicDocs;
  } catch (error: any) {
    console.log(error.response);
    return error.response;
  }
};
