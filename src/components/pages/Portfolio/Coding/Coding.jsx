import React from "react";
import codingDetails from "../../../../images/coding-skill-course-details.png";
import codingCourse from "../../../../images/coding-skill-courses.png";
import codingHome from "../../../../images/coding-skill-home.png";

const Runigo = () => {
  return (
    <section>
      <div className="py-32 px-5 md:px-0">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-violet-700 font-semibold">
            Coding Skill
          </h2>
          <div className="pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <img
                className="shadow-xl rounded-lg"
                src={codingHome}
                alt="coding-home"
              />
              <img
                className="shadow-xl rounded-lg"
                src={codingCourse}
                alt="coding-course"
              />
              <img
                className="shadow-xl rounded-lg"
                src={codingDetails}
                alt="coding-course-details"
              />
            </div>
          </div>
          <div className="pt-12">
            <h3 className="text-2xl md:text-3xl text-violet-700 font-semibold">
              Project Name : Coding Skill
            </h3>
            <div className="pt-5">
              <h5 className="text-xl md:text-2xl text-dark font-medium">
                Project Features :
              </h5>
              <ul className="list-disc pl-8 pt-4">
                <li>Coding Skill is an Online Code Learning Platform</li>
                <li>
                  I used React, React Router, Private Route, Context API,
                  Firebase Authentication and many more for Client Side and I
                  used Express JS for Server Side
                </li>
                <li>
                  I used some packages like react-icons, react-to-print and CSS
                  Framework Bootstrap.
                </li>
                <li>
                  The interesting fact is this website has 3 login/register
                  method like : google, github and custom email-password.
                </li>
                <li>
                  In this Website user can check and purchase any type of Course
                </li>
                <li>Also use can download course details page as PDF</li>
                <li>
                  Coding Skill is a fully responsive for both Dekstop/Laptop and
                  Mobile.
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12">
            <h5 className="text-xl md:text-2xl text-dark font-medium pb-4">
              Technology Used :
            </h5>
            <div className="flex flex-wrap">
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">
                JavaScript
              </span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">
                ReactJS
              </span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">NodeJS</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">
                MongoDB
              </span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">
                Firebase
              </span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">
                ReactPDF
              </span>
            </div>
          </div>
          <div className="pt-8">
            <a
              className="text-base text-white bg-violet-700 py-3 px-6 rounded-md hover:bg-violet-500 duration-300"
              href="https://coding-skill.web.app"
            >
              Live Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Runigo;
