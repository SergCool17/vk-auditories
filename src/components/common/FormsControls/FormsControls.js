import React from "react";
import { Field } from "redux-form";
import styles from "./FormsControls.module.css";

const FormControl = ({
  input,
  meta: { touched, error },
  children,
  ...props
}) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      {children}
      <div>{hasError && <span>{error}</span>}</div>
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder,
  name,
  type,
  component,
  validators,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        type={type}
        component={component}
        validate={validators}
        {...props}
      />
      {text}
    </div>
  );
};

/*
export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <textarea {...input} {...props} />
      <div>{hasError && <span>{meta.error}</span>}</div>
    </div>
  );
};  */
