import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function About() {
  return (
    <div className = "global">
      <Navbar/>
      <div className="about">
        <div className="container">
          <Link to="/about" className="lnk">
            <h2>About</h2>
          </Link>
          <span className="desc">
            Measuring the trends of games on Steam can give some great insights,
            and this website aims to be a valuable tool to do so. An unpopular
            game does not necessarily indicate a bad game, and vice versa. If
            you have any questions or feedback please contact via
            <span className="high">Twitter</span> or find my personal details
            <span className="high">here</span>. <br /> <br />
             This website is facilitated by a
            web frontend service and a data collector service that queries the{" "}
            <span className="high">Steam Web API</span>. The collector queries
            the number of concurrent players on an hourly interval for every
            single game in the Steam catalog, and has been collecting data since
            July of 2012. The services are written in{" "}
            <span className="high" Go></span> and the data is stored and managed
            with <span className="high">PostgreSQL</span>. <br /> <br /> Website and services
            are hosted by <span className="high">Digital Ocean</span> in New
            York.
          </span>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
