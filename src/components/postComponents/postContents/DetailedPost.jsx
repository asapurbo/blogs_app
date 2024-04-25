import { useDispatch, useSelector } from 'react-redux';
import { FaRegBookmark, FaRegThumbsUp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { updateAPI, updateLike } from '../../../features/postsFetch/postsSlice';
import { likeHandle, postHandle } from '../../../features/post/postSlice';
import { useEffect, useState } from 'react';

const DetailedPost = () => {
  const post = useSelector(state => state.post.post);
  const { title, id, description, image, likes, tags, isSaved } = post ?? {};
  const [save, setSave] = useState();
  const [like, setLike] = useState(likes);

  const dispatch = useDispatch()
  const handleClick = (id, isSaved) => {
    dispatch(updateAPI({id, isSaved}));
    dispatch(postHandle());
    setSave(!save)
  }
  const handleLike = (id, likes) => {
    dispatch(updateLike({id, likes}))
    dispatch(likeHandle())
    setTimeout(() => {
      setLike(like => like + 1)
    }, 50);
  }

  useEffect(() => {
    if(save === undefined && isSaved) {
      setSave(isSaved);
    }
    setLike(likes)
  }, [save, isSaved, likes])

  return (
    <main className="post">
      <img src={image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
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
        <div className="btn-group">
           {/* handle like on button click  */}
          <button className="like-btn" id="lws-singleLinks" onClick={() => handleLike(id, likes)}>
            <div className='flex items-center gap-x-1'>
                <FaRegThumbsUp/>
                <h3>{like}</h3>
            </div>
          </button>

           {/* handle save on button click  */}
           {/* use ".active" className and "Saved" text  if a post is saved, other wise "Save"  */}
          <button onClick={() => handleClick(id, isSaved)} className={ save ? "active save-btn" : "save-btn"} id="lws-singleSavedBtn">
            <div className='flex items-center gap-x-1'>
              <FaRegBookmark/>
              <h3>{ save ? 'Saved' : 'Seve'}</h3>
            </div>
          </button>
        </div>
        <div className="mt-6">
          <p>
            {description}
          </p>
        </div>
      </div>
    </main>
  )
}

export default DetailedPost