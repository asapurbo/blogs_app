import { useDispatch, useSelector } from "react-redux";
import RelatedPost from "./RelatedPost"
import { useEffect } from "react";
import { relatedPostFetch } from "../../../../features/relatedPost/relatedPostSlice";

const RelatedPosts = () => {
  const dispatch = useDispatch()
  const {isLoading, isError, error, relatedPosts } = useSelector((state) => state.relatedPost);
  const { id, tags } = useSelector(state => state.post.post)
  useEffect(() => {
    dispatch(relatedPostFetch({id, tags}))
  }, [dispatch, id, tags])

  let content;
  if (isLoading) content = <div>Loading....</div>;
  if(!isLoading && isError)
    content = <div>{error}</div>
  if(!isLoading && !isError && relatedPosts.length === 0)
    content = <div>it was not found</div>
  if(!isLoading && !isError && relatedPosts.length > 0)
    content = relatedPosts?.map(relatedPost => <RelatedPost key={relatedPost.id} relatedPost={relatedPost} />)

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
      <div className="space-y-4 related-post-container">
         {content}
      </div>
    </aside>
  )
}

export default RelatedPosts