import { useParams } from "react-router-dom";
import BackButton from "../postComponents/BackButton"
import PostContents from '../postComponents/postContents/PostContents';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { postFetch } from '../../features/post/postSlice';

const Post = () => {
  const params = useParams();
  const dispatch = useDispatch()
  const { postId } = params;
  
  useEffect(() => {
    dispatch(postFetch(postId))
  }, [dispatch, postId])

  return (
    <>
      <BackButton/>
      <PostContents/>
    </>
  )
}

export default Post