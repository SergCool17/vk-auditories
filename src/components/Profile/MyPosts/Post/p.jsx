import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.scss";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required
} from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"textarea"}
          name={"newPostText"}
          placeholder={"Post some message"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
