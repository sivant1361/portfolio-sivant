import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Full Stack Development and Machine Learning</h1>
        <Typed
          className="typed-text"
          strings={[
            "Full Stack Development",
            "Machine Learning",
            "Data Science",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a className="btn-main-offer">Contact Me</a>
      </div>
    </div>
  );
};

export default Header;
