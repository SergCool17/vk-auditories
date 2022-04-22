import React from "react";
import {
  updateCommentCreator,
  sendCommentCreator
} from "../../redux/sidebar-reducer";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onchangecomment: (comment) => {
      dispatch(updateCommentCreator(comment));
    },
    onSendComment: () => {
      dispatch(sendCommentCreator());
    }
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Sidebar);
