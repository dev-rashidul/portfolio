import React from "react";
import runigoHome from "../../../../images/runigo-home.png";
import runigoLesson from "../../../../images/runigo-lesson.png";
import runigoMentor from "../../../../images/runigo-mentor.png";

const Runigo = () => {
  return (
    <section>
      <div className="py-32 px-5 md:px-0">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-violet-700 font-semibold">
            Runigo
          </h2>
          <div className="pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <img
                className="shadow-xl rounded-lg"
                src={runigoHome}
                alt="runigo-home"
              />
              <img
                className="shadow-xl rounded-lg"
                src={runigoMentor}
                alt="runigo-mentor"
              />
              <img
                className="shadow-xl rounded-lg"
                src={runigoLesson}
                alt="runigo-lesson"
              />
            </div>
          </div>
          <div className="pt-12">
            <h3 className="text-2xl md:text-3xl text-violet-700 font-semibold">
              Project Name : Runigo
            </h3>
            <div className="pt-5">
              <h5 className="text-xl md:text-2xl text-dark font-medium">
                Project Features :
              </h5>
              <ul className="list-disc pl-8 pt-4">
                <li>This is a University Teaching Platform</li>
                <li>
                  In this Website has separate page for both Mentor and Lesson
                </li>
                <li>Also has Dashboard for Mentor and Admin</li>
                <li>This Website has Login/Registration Option.</li>
                <li>The special thing in this Website has Real Time Chat</li>
              </ul>
            </div>
          </div>
          <div className="pt-12">
            <h5 className="text-xl md:text-2xl text-dark font-medium pb-4">
              Technology Used :
            </h5>
            <div className="flex flex-wrap">
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">HTML</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">CSS</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">
                JavaScript
              </span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">
                ReactJS
              </span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">NodeJS</span>
            </div>
          </div>
          <div className="pt-8">
            <a
              className="text-base text-white bg-violet-700 py-3 px-6 rounded-md hover:bg-violet-500 duration-300"
              href="https://runigo.netlify.app/"
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
