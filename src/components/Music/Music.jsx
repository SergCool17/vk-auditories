import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { AddMusicForm } from "./AddMusicForm";

const MusicDesires = (props) => {
  return (
    <form onSubmit={props.handlesubmit}>
      <Field
        component={Textarea}
        name={"desiredMusic"}
        placeholder={"Leave your fauvorite track name"}
      />
    </form>
  );
};

const Music = (props) => {
  return (
    <div className="music">
      <div>
        <p>What music would you listen</p>
      </div>

      <AddMusicForm />
    </div>
  );
};
export default Music;
