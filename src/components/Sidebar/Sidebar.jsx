import React from "react";
import s from "./Sidebar.module.scss";
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = (props) => {
  let state = props.sidebar;
  let sidebarPost = state.popularPosts.map((el) => (
    <SidebarItem title={el.title} viewesCount={el.viewesCount} key={el.id} />
  ));

  let onchangecomment = (event) => {
    let comment = event.target.value;
    props.onchangecomment(comment);
  };
  let onSendComment = () => {
    props.onSendComment();
  };
  return (
    <div className={s.sidebar}>
      <>Best Posts</>
      <div className={s.item}>{sidebarPost}</div>
      <textarea
        value={state.newComment}
        placeholder="Comment"
        onChange={onchangecomment}
      ></textarea>
      <button onClick={onSendComment}>Send</button>
    </div>
  );
};
export default Sidebar;
