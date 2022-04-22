import React from "react";
import s from "./Post.module.scss";
import ava from "../../../../img/female.jpg";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={ava} />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
