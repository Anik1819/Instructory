import React from "react";

import "./Join.css";

const Join = () => {
  return (
    <div className="container d-flex flex-wrap ">
      <div className="col-lg-6 col-sm-12">
        <div className="join">
          {" "}
          <h3>Join Instructory Community</h3>
          <p>
            Instructory is for everyone and different from everyone. You can
            teach or you can learn, in both way you can empower youself with lot
            of skills and support.
            <br /> <br /> Instructory Community is the largest and one of the
            best eLearning group of Instructory, where you can get so many tips,
            tricks and news about newly arrival courses.
          </p>
          <div className="Ic">
            <h4>Instructory Community</h4>
            <h5 className="text-muted">Public group . 65.4K members</h5>
            <button>Join Group</button>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12">
        <div className="you-tube">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LcyTBOxVOck"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Join;
