import React from "react";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Portfolio from "./Portfolio/Portfolio";

const Home = () => {
  return (
    <>
      {/* Hero Section JSX Start */}

      <Hero></Hero>

      {/* Hero Section JSX End */}

      {/* Portfolio Section JSX Start */}

      <Portfolio></Portfolio>

      {/* Portfolio Section JSX End */}

      {/* Contact Section JSX Start */}

      <Contact></Contact>

      {/* Contact Section JSX End */}
    </>
  );
};

export default Home;
