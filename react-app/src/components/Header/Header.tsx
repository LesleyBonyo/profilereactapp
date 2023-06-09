import React from "react";
import "./Header.css";

function Header() {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./letter.png" width={20} alt="logo" />

        <div className="flexCenter h-menu">
          <a href="./index.html">Home</a>
          <a href="">Projects</a>
          <a href="./About.html">About</a>
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
