import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.scss";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
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

const MyPosts = ({ posts, ...props }) => {
  let postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
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
