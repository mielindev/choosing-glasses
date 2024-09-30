import React from "react";
import ModelImg from "../ModelImg/ModelImg";
import GlassesImg from "../GlassesImg/GlassesImg";

export default function Body() {
  return (
    <div
      className="bg-img pt-24"
      style={{
        backgroundImage: `url(
          "https://mdbootstrap.com/img/Photos/Others/images/76.jpg"
        )`,
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ModelImg />
      <GlassesImg />
    </div>
  );
}
