import Axios from "../../util/Axios";
// http://localhost:9000/blogs?tags_like=react&id_ne=1

export const relatedPostAPI = async ({ id, tags }) => {
  let postFetchURL = "";
  let limit = 5;
  if (tags.length > 0) {
    postFetchURL =
      tags.map((tag) => `tags_like=${tag}`).join("&") +
      `&id_ne=${id}&_limit=${limit}`;
  }
  const rqs = await Axios.get(`/blogs?${postFetchURL}`);
  return rqs.data;
};
