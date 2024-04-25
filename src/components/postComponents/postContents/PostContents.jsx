import DetailedPost from "./DetailedPost"
import RelatedPosts from "./relatedPosts/RelatedPosts"

const PostContents = () => {
  return (
    <section className="post-page-container">
     {/* detailed post   */}
     <DetailedPost/>
     {/* detailed post ends  */}
     {/* related posts  */}
     <RelatedPosts/>
     {/* related posts ends  */}
  </section>
  )
}

export default PostContents