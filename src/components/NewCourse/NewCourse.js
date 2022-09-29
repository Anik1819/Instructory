import React from "react";
import Course from "../Course/Course";

const NewCourse = () => {
  return (
    <div className="container my-5">
      <h1 className="custom-title pt-5 text-center ">Newly Lunched Course</h1>
      <div className="custom-title-separator"></div>
      <Course />
    </div>
  );
};

export default NewCourse;
