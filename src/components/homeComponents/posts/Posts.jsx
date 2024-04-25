import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postFetch } from "../../../features/postsFetch/postsSlice";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const {sort, filter: fil} = useSelector((state) => state.filter);
  const { isLoading, isError, error, posts: postsItem } = posts;

  useEffect(() => {
    dispatch(postFetch());
  }, [dispatch]);

  let content;

  if (isLoading) content = <div>Loading....</div>;

  if (!isLoading && isError) content = <div>{error}</div>;

  if (!isLoading && !isError && postsItem.length === 0)
    content = <div>it was not found</div>;

  if (!isLoading && !isError && postsItem.length > 0)
    content = [...postsItem]?.sort((current, next) => {
      if(sort === 'newest') {
        const date1 = new Date(current.createdAt);
      const date2 = new Date(next.createdAt);
      return date2 - date1
      } else if(sort === 'most_liked') {
        return next.likes - current.likes
      }
    }).filter((post) => {
      if(fil === 'All') {
        return true;
      } else if(fil === "Saved") {
        return post.isSaved;
      }
    }).map((post) => <Post key={post.id} post={post} />);

  return (
    <main className="post-container" id="lws-postContainer">
      {/* single post  */}
      {content}
    </main>
  );
};

export default Posts;
