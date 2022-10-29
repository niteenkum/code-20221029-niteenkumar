import React from "react";
import EHeading from "../Components/EHeading";
import ERoomsCards from "../Components/ERoomsCards";
import ESubHeading from "../Components/ESubHeading";

export default function SecondScreen() {
  let cardValue = [
    {
      title: "Room with one king-size bed",
      labels: [
        {
          label: "35$",
          book: false,
        },
        { label: "28м²", book: false },
        { label: "Book!", book: true },
      ],
      image: require("../assets/pexels1.png")
    },
    {
      title: "Penthouse for 8 person",
      labels: [
        {
          label: "2039$",
          book: false,
        },
        { label: "438м²", book: false },
        { label: "Book!", book: true },
      ],
      image: require("../assets/pexels2.png")
    },
  ];

  return (
    <div className="second-screen">
      <EHeading 
      heading="Explore"
      />
      <ESubHeading
        title={"From one-guest rooms to penthouses with pools and gardens"}
      />

      <div className="room-image-cards">
        {
          cardValue.map((val, index) => (
            <ERoomsCards
            key={index}
            title={val?.title}
            labels={val?.labels}
            image={val?.image}
          /> 
          ))
        }
      </div>
    </div>
  );
}
