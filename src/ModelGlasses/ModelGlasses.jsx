import React, { useState } from "react";
import model from "./glassesImage/model.jpg";
import glass1 from "./glassesImage/g1.jpg";
import glass2 from "./glassesImage/g2.jpg";
import glass3 from "./glassesImage/g3.jpg";
import glass4 from "./glassesImage/g4.jpg";
import glass5 from "./glassesImage/g5.jpg";
import glass6 from "./glassesImage/g6.jpg";
import glass7 from "./glassesImage/g7.jpg";
import glass8 from "./glassesImage/g8.jpg";
import glass9 from "./glassesImage/g9.jpg";
import style from "./ModelGlasses.module.scss";
import { data } from "./datajson.js";
import g1 from "./glassesImage/v1.png";
import g2 from "./glassesImage/v2.png";
import g3 from "./glassesImage/v3.png";
import g4 from "./glassesImage/v4.png";
import g5 from "./glassesImage/v5.png";
import g6 from "./glassesImage/v6.png";
import g7 from "./glassesImage/v7.png";
import g8 from "./glassesImage/v8.png";
import g9 from "./glassesImage/v9.png";

export default function ModelGlasses() {
  let list = data;
  let arrGlasses = [g1, g2, g3, g4, g5, g6, g7, g8, g9];
  const [glasses, setGlasses] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  let handleChangeGlass = (id) => {
    setGlasses(arrGlasses[id - 1]);
    setTitle(list[id - 1].name);
    setDesc(list[id - 1].desc);
  };
  return (
    <div>
      <div className="model d-flex justify-content-around">
        <div className={style.modelAfter}>
          <img src={model} alt="" />
          <div className={style.putGlasses}>
            <img
              id="appearGlasses"
              className="opacity-75"
              src={glasses}
              alt=""
            />
          </div>
          <div className={style.descGlasses}>
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
        </div>
        <div className={style.modelBefore}>
          <img src={model} alt="" />
        </div>
      </div>
      <div className="glassListItem row w-3/4 d-flex align-items-center bg-white my-5 mx-auto container">
        <div className="col-lg-2">
          <img
            onClick={() => {
              handleChangeGlass(1);
            }}
            className={style.img}
            src={glass1}
            alt=""
          />
        </div>
        <div className="col-lg-2">
          <img
            onClick={() => {
              handleChangeGlass(2);
            }}
            className={style.img}
            src={glass2}
            alt=""
          />
        </div>
        <div className="col-lg-2">
          <img
            onClick={() => {
              handleChangeGlass(3);
            }}
            className={style.img}
            src={glass3}
            alt=""
          />
        </div>
        <div className="col-lg-2">
          <img
            onClick={() => {
              handleChangeGlass(4);
            }}
            className={style.img}
            src={glass4}
            alt=""
          />
        </div>
        <div className="col-lg-2">
          <img
            onClick={() => {
              handleChangeGlass(5);
            }}
            className={style.img}
            src={glass5}
            alt=""
          />
        </div>
        <div className="col-lg-2">
          <img
            onClick={() => {
              handleChangeGlass(6);
            }}
            className={style.img}
            src={glass6}
            alt=""
          />
        </div>
        <div className="col-lg-2">
          <img
            onClick={() => {
              handleChangeGlass(7);
            }}
            className={style.img}
            src={glass7}
            alt=""
          />
        </div>
        <div className="col-lg-2">
          <img
            onClick={() => {
              handleChangeGlass(8);
            }}
            className={style.img}
            src={glass8}
            alt=""
          />
        </div>
        <div className="col-lg-2">
          <img
            onClick={() => {
              handleChangeGlass(9);
            }}
            className={style.img}
            src={glass9}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
