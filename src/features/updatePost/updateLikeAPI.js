export const updateLikeAPI = async ({id, likes}) => {
    const rqs = await fetch(`http://localhost:9000/blogs/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        likes: likes + 1
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
    const post = await rqs.json();
    return post;
};
  