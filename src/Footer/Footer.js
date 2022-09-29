import React from "react";
import "./Footer.css";
import useful from "../Data/Useful";
const Footer = () => {
  return (
    <div className="footer">
      <div className="  container ">
        <div className="row">
          <div className="col-md-3 ">
            <img
              src="https://instructory.net/assets/images/logo-new-white.png"
              className="logo img-fluid"
              alt=""
            ></img>
            <p>
              Instructory is all about connecting & discovering talents,
              inspiring people and impact lives with the best teaching and
              earning opportunities. “Instructory” is an online teaching
              marketplace, where instructors can create and upload their
              knowledge & make money online. It is also an E-Learning Platform
              to learn anything from anywhere from the best & Top rated
              Professionals and Freelancers! It has created earning
              opportunities for millions of instructors!
            </p>
            <h5 className="p-2 " style={{ fontSize: "25px" }}>
              Contact Us
            </h5>
            <h6 className="pn">
              +8801872650687, +8801880087154, +8801880087155
            </h6>
          </div>
          <div className="col-md-3 ps-5">
            <h6>Useful Links</h6>
            <hr style={{ color: "white", height: "2px" }}></hr>
            <li>Course Categories</li>
            <li>How It Works</li>
            <li>Become an Affiliate</li>
            <li>Become an Online Teacher</li>
            <li>Our Learners</li>
            <li>Our Instructors</li>
          </div>
          <div className="col-md-3">
            <h6>Need Support</h6>
            <hr style={{ color: "white", height: "2px" }}></hr>
            <li>Contact Us</li>
            <li>FAQ</li>
            <br></br>
            <br></br>
            <h6>Legal</h6>
            <hr style={{ color: "white", height: "2px" }}></hr>
            <li>Purchase and Withdraw</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
          </div>
          <div className="col-md-3">
            <h6>About Instructory</h6>
            <hr style={{ color: "white", height: "2px" }}></hr>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
            <li>Our Story</li>
            <br></br>
            <br></br>
            <h6>More</h6>
            <hr style={{ color: "white", height: "2px" }}></hr>
            <li>News & Events</li>
            <li>Instructor's Level</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
