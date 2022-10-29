import EButton from "../Components/EButton";
import EInput from "../Components/EInput";
import "./screen.css";

export default function MainScreen() {
  const bg = require("../assets/main-screen-bg.png")
  return (
    <div className="main-screen">
      <p className="heading">Rethink your <br/>living & renting</p>
      <p className="sub-heading">Make your stay painless with us</p>

      <div className="card-for-input">
        <EInput/>
        <EInput/>
        <EInput/>
        <EButton/>
      </div>
    </div>
  )
}
