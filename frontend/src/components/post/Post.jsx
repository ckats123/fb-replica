import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  // initial state is false bc we didnt like any post
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    // if we didnt like the post
    setLike(isLiked ? like - 1 : like + 1);
    // change the state of isLiked to the opposite
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                Users.filter((u) => u.id === post.userId)[0]
                  .profilePicture
              }
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"> {post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">
              {like} people liked this
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              {" "}
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
