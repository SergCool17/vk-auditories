import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <p> BCOOL </p>
      </div>
      <div className={s.pageName}>Profile Page</div>
      <div className={s.search}>
        <textarea placeholder="Search friends" />
        <button>Find</button>
      </div>
      <div className={s.nav_menu}>
        <a href="/smile">smile</a>
        <a href="/msg">msg</a>
        <a href="/news">news</a>
        <a href="/ava">miniAva+Name+status</a>
      </div>
      {props.isAuth ? (
        <div>
          {props.login} - <button onClick={props.logout}>Log out</button>{" "}
        </div>
      ) : (
        <NavLink to={"/login"}>Login</NavLink>
      )}
    </header>
  );
};
export default Header;
