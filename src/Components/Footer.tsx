import "./footer.css"

export default function Footer() {
  return (
    /* A footer component. */
    <div className="footer">
      <div>
        <p  className="logo">Your Logo</p>
        <p  className="logo-text">
          © 2021 Company Name
          <br />
          All rights reserved
        </p>
      </div>

      <div className="footer-items">

      <p>Explore</p>

      <p>About Us</p>

      <p>Cities</p>

      <div className="call"> Call</div>

      </div>
    </div>
  );
}
