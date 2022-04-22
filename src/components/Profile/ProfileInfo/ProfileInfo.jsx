import React from "react";
import s from "./ProfileInfo.module.scss";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../img/avatar.png";
import ProfileStatus from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img
          src={profile.photos.large != null ? profile.photos.large : userPhoto}
          alt="avatar"
        />
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
