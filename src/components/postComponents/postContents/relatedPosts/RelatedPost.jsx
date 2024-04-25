import { Link } from "react-router-dom";

const RelatedPost = ({relatedPost}) => {
  const { id, title, image, createdAt, tags } = relatedPost ?? {};
 
  return (
    <div className="card">
      <Link to={`/post/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link to={`/post/${id}`} className="text-lg post-title lws-RelatedPostTitle">
          {title}
        </Link>
        <div className="mb-0 tags">
        {
        tags && id && tags?.map((tag, index) => {
          return (
            <Link key={index} to={`https://www.${tag}.com`} target='_blank'>
              <span>#{tag}</span>
            </Link>
          )
        })
      }
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RelatedPost;
