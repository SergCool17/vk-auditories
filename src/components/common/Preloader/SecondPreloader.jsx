import React from "react";
import s from "./SecondPreloader";

let SecondPreloader = (props) => {
  return (
    <div className={s.loadingWrap}>
      <div className={s.triangle1}>ssssome</div>
      <div className={s.triangle2}></div>
      <div className={s.triangle3}></div>
    </div>
  );
};

export default SecondPreloader;
