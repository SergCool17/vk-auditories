import React from "react";
import preloader from "../../../img/preloader.svg";

let Preloader = (props) => {
  return (
    <div style={{ backgroundColor: "white", float: "left" }}>
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
