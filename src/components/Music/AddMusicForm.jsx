import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Textarea } from "../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

const AddMusicFormR = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"musicArea"}
          placeholder={"What's your favourite track?"}
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export const AddMusicForm = reduxForm({ form: "musicForm" })(AddMusicFormR);
