import "./header.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
  /* A React component for rendering the header. */
    <div className="header">
      <div className="logo">
        <p>Your Logo</p>
      </div>

      <div className="menu" onClick={() => setShowMenu(!showMenu)}>
        <AiOutlineMenu className="icon" />
      </div>

      <div className="header-items">
        <p>Explore</p>

        <p>About Us</p>

        <p>Cities</p>

        <div className="call"> Call</div>
      </div>

      {
        // Show menu on click
        showMenu ? (
          <div className="menu-items">
            <p>Explore</p>
             <p> About Us</p>
              <p> Cities</p>

            <div className="call"> Call</div>
          </div>
        ) : null
      }
    </div>


  );
}
