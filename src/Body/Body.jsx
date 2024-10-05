import React from "react";
import ModelGlasses from "../ModelGlasses/ModelGlasses";

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
      }}
    >
      <ModelGlasses />
    </div>
  );
}
