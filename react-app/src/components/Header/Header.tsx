import React from "react";
import "./Header.css";

function Header() {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" width={100} alt="logo" />

        <div className="flexCenter h-menu">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Github</a>
          <a href="#">Feedback</a>
          <button className="button">
            <a href="#">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
