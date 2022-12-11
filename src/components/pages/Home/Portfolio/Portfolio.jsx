import React from "react";
import { Link } from "react-router-dom";
import coding from '../../../../images/coding-skill.png';
import photography from '../../../../images/photography.png';
import runigo from "../../../../images/runigo.png";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className="portfolio-wrapper px-5 md:px-0 mt-32">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-violet-700 font-semibold pb-16">
            Projects
          </h2>
          <div className="md:flex">
            <div className="w-full md:w-1/2 lg:w-1/3 px-0 md:px-5 mb-10 md:mb-0">
              <div className="portfolio-card relative">
                <div className="rounded-lg">
                  <img src={runigo} alt="runigo" />
                </div>
                <h3 className="text-2xl text-violet-700 font-semibold p-8">
                  Runigo
                </h3>
                <div className="portfolio-content">
                <Link className="text-base text-white bg-violet-700 py-3 px-5 rounded-md" to="/runigo">
                    Project Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-0 md:px-5 mb-10 md:mb-0">
              <div className="portfolio-card relative">
                <div className="rounded-lg">
                  <img src={coding} alt="coding-skill" />
                </div>
                <h3 className="text-2xl text-violet-700 font-semibold p-8">
                  Coding Skill
                </h3>
                <div className="portfolio-content">
                  <Link className="text-base text-white bg-violet-700 py-3 px-5 rounded-md" to="/coding">
                    Project Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-0 md:px-5 mb-10 md:mb-0">
              <div className="portfolio-card relative">
                <div className="rounded-lg">
                  <img src={photography} alt="photography" />
                </div>
                <h3 className="text-2xl text-violet-700 font-semibold p-8">
                  Mix Photography
                </h3>
                <div className="portfolio-content">
                <Link className="text-base text-white bg-violet-700 py-3 px-5 rounded-md" to="/photography">
                    Project Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
