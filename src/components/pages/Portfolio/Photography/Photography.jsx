import React from "react";
import photographyDetails from "../../../../images/photography-details.png";
import photographyHome from "../../../../images/photography-home.png";
import photographyService from "../../../../images/photography-services.png";

const Runigo = () => {
  return (
    <section>
      <div className="py-32 px-5 md:px-0">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-violet-700 font-semibold">
            Mix Photography
          </h2>
          <div className="pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <img
                className="shadow-xl rounded-lg"
                src={photographyHome}
                alt="photography-home"
              />
              <img
                className="shadow-xl rounded-lg"
                src={photographyService}
                alt="photography-services"
              />
              <img
                className="shadow-xl rounded-lg"
                src={photographyDetails}
                alt="photography-details"
              />
            </div>
          </div>
          <div className="pt-12">
            <h3 className="text-2xl md:text-3xl text-violet-700 font-semibold">
              Project Name : Mix Photography
            </h3>
            <div className="pt-5">
              <h5 className="text-xl md:text-2xl text-dark font-medium">
                Project Features :
              </h5>
              <ul className="list-disc pl-8 pt-4">
                <li>Mix Photography is a Photography Service Website</li>
                <li>
                  I used Rect, Reacet Router, Node, MongoDB, Express, React
                  Bootstrap, Firebase, some react packages like :
                  react-photo-view, react-helmet etc.
                </li>
                <li>User Can add Review to any services which he purchased</li>
                <li>
                  This Website has some cool features like : User can add
                  services, add/update/delete review to every single service
                  from My Reviews. Note : To visit My Review page and
                  add/update/delete review yo must have to login.
                </li>
                <li>
                  My Website has Login/Registration Authentication and private
                  route to add review.
                </li>
                <li>In this Website Also I used JWT token to Identify user.</li>
                <li>
                  Mix Photography is a fully responsive for both Dekstop/Laptop
                  and Mobile.
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
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Helmet</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">JWT</span>
            </div>
          </div>
          <div className="pt-8">
            <a
              className="text-base text-white bg-violet-700 py-3 px-6 rounded-md"
              href="https://mix-photography.web.app"
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
