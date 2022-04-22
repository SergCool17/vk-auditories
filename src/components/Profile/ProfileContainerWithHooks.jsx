import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getUserProfile,
  getStatus,
  updateStatus
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import { Redirect, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileContainer = React.memo(({ match, authorizedId, ...props }) => {
  useEffect(() => {
    let userId = match.params.userId;
    if (!userId) {
      userId = authorizedId;
      if (!userId) {
        props.history.push("/login");
      }
    }
    props.getUserProfile(userId);
    props.getStatus(userId);
  }, [match.params.userId, authorizedId]);

  return (
    <Profile
      {...props}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
    />
  );
});

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
