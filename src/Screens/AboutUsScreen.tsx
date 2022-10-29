import React from "react";
import EHeading from "../Components/EHeading";
import ESubHeading from "../Components/ESubHeading";

export default function AboutUsScreen() {
  const image = require("../assets/chapter1.png");
  const image2 = require("../assets/chapter2.png");
  const image3 = require("../assets/chapter3.png");
  const image4 = require("../assets/chapter4.png");
  // var divImage = {
  //   backgroundImage : "url(" + image + ")",
  //   borderRadius: "16px",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // }

  return (
    <div className="second-screen">
      <EHeading heading="About Us" />
      <ESubHeading title={"Allow us to tell you a short story..."} />

      <div className="about-us-chapter">
        <div className="chapter-1 chapter">
          <img src={image} className="chapter-image" />
          <div className="e-card-details">
          <p className="label">Chapter I</p>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun
            </p>
          </div>
        </div>

        <div className="chapter-2 chapter">
          <img src={image2} className="chapter-image" />
          <div className="e-card-details">
            <p className="label">Chapter II</p>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun
            </p>
          </div>
        </div>

        <div className="chapter-3 chapter">
          <img src={image3} className="chapter-image" />
          <div className="e-card-details">
            <p className="label">Chapter III</p>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun
            </p>
          </div>
        </div>

        <div className="chapter-4 chapter">
          <img src={image4} className="chapter-image" />
          <div className="e-card-details">
            <p className="label">Chapter IV</p>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
