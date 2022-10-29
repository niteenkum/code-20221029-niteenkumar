import EButton from "../Components/EButton";
import EInput from "../Components/EInput";
import "./screen.css";

export default function MainScreen() {
  const bg = require("../assets/main-screen-bg.png");

  /* An array of objects for input box. */
  let inputBox = [
    {
      label: "CITY",
      placeholder: "Enter your city",
      options: [
        "Mumbai",
        "Delhi",
        "Bangalore",
        "Chennai",
        "Kolkata",
        "Pune",
        "Jaipur",
        "Hyderabad",
        "Ahmedabad",
        "Chandigarh",
      ],
    },
    {
      label: "DATES",
      placeholder: "Select dates",
      options: [
        "29-10-2022",
        "30-10-2022",
        "31-10-2022",
        "01-11-2022",
        "02-11-2022",
        "03-11-2022",
        "04-11-2022",
        "05-11-2022",
        "06-11-2022",
        "07-11-2022",
      ],
    },
    {
      label: "GUESTS",
      placeholder: "Select number of guests",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  ];

  return (
 /* A JSX code. It is a syntax extension to JavaScript. It is used with React to describe what the UI
 should look like. JSX may remind you of a template language, but it comes with the full power of
 JavaScript. */
    <div className="main-screen">
      <p className="heading">
        Rethink your <br />
        living & renting
      </p>
      <p className="sub-heading">Make your stay painless with us</p>

      <div className="card-for-input">
        {/* A map function. It is used to iterate over an array. */}
        {inputBox.map((item, index) => {
          return (
            <EInput
              key={index}
              label={item.label}
              placeholder={item.placeholder}
              options={item.options}
            />
          );
        })}
        <EButton />
      </div>
    </div>
  );
}
