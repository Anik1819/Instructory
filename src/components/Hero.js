import "./Hero.css";
import React from "react";
import Navbar from "./Navbar/Navbar";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="container">
        <Navbar />
        <h3 className="text-center hero-h3 mt-4">
          ONLINE TEACHING MARKETPLACE & E-LEARNING PLATFORM
        </h3>
        <h1 className="text-center hero-h1">TEACH ANYTHING, LEARN ANYTIME</h1>
        <p className="text-center hero-p">
          Upload your course tutorial & become an online teacher. Earn as much
          as you can, it's FREE! Also, Browse our course categories where you
          can develop your skills anytime from the best professionals.
        </p>
        <div className="row justify-content-center">
          <button className="btn-st  mt-2">Start Teaching</button>
          <button className="btn-sl mt-2 ms-3">Start Learning</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
