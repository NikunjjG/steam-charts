import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="links">
          <Link className="lnk" to="/about">
            <span>About |</span>
          </Link>
          <Link className="lnk" to="/privacy">
            <span>Privacy |</span>
          </Link>
          <Link className="lnk" to="/advertise">
            <span>Advertise</span>
          </Link>
        </div>
        <div className="desc">
          <span>
            All data is <span className="high">powered by Steam.</span> Not
            affiliated with Valve in any way. All trademarks are property of
            their respective owners in the US and other countries. Our goal is
            to provide unique insight into gaming trends. © steamcharts.com
          </span>
        </div>
      </div>
    </div>
  );
}
