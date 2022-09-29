import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light text-white p-4 ">
        <div className="container-fluid">
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon custom-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            {" "}
            <img
              src="https://www.instructory.net/assets/images/logo-new-white.png"
              className="img-fluid mt-4 pe-3"
              width={200}
              alt=""
            />
          </a>

          <a
            className="nav-link active text-white text-center cc fw-bold mt-4 ps-5"
            aria-current="page"
            href="/"
          >
            <i class="fa-sharp fa-solid fa-circle-check"></i> Course catagories
          </a>

          <a
            className="nav-link text-white text-center ba fw-bold mt-4 ps-5"
            href="/"
          >
            Become an affiliate
          </a>

          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white text-center fw-bold" href="/">
                  Sing in
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-center" href="/">
                  <button className="gs text-white fw-bold">Get Started</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
