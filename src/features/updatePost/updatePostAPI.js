export const updatePostAPI = async ({id, isSaved}) => {
  const rqs = await fetch(`http://localhost:9000/blogs/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      isSaved: !isSaved
    }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
  const post = await rqs.json();
  return post;
};
