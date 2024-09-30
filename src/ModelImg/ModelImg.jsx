import React, { Fragment } from "react";
import style from "./ModelImg.module.scss";
import glassv1 from "../glassesImage/v1.png";
export default function ModelImg() {
  return (
    <Fragment>
      <div className="modelItems">
        <div className={style.modelAfter}>
          <div id={style.putGlasses}>
            <img src={glassv1} alt="" />
          </div>
        </div>
        <div className={style.modelBefore}></div>
      </div>
      <div className="glasses"></div>
    </Fragment>
  );
}
