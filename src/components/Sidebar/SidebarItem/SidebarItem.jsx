import React from "react";
import s from "./SidebarItem.module.scss";
const SidebarItem = (props) => {
  return (
    <div className={s.comment}>{props.viewesCount + ` ` + props.title}</div>
  );
};
export default SidebarItem;
