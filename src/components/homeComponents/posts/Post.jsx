import { FaRegThumbsUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, likes, image, createdAt, isSaved, tags } = post ?? {};
  const style = isSaved ? `lws-badge active` : `lws-badge`;
  return (
    <div className="lws-card">
      <Link to={`/post/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <div className="lws-likeCount">
            <div className="flex items-center gap-x-1">
              <FaRegThumbsUp />
              <h3>{likes}</h3>
            </div>
          </div>
        </div>
        <Link to={`/post/${id}`} className="lws-postTitle">
          {title}
        </Link>

        <div className="lws-tags">
          {tags &&
            id &&
            tags?.map((tag, index) => {
              return (
                <Link key={index} to={`https://www.${tag}.com`} target="_blank">
                  <span>#{tag}</span>
                </Link>
              );
            })}
        </div>
        {/* Show this element if post is saved  */}
        {isSaved ? (
          <div className="flex gap-2 mt-4">
            <span className={style}> Saved </span>
          </div>
        ) : null}
        {/* Show this element if post is saved Ends  */}
      </div>
    </div>
  );
};

export default Post;
