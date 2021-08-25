import React, { useState } from "react";
// import { Sidebar } from "semantic-ui-react";
import Sidebar from "../components/Sidebar";
import ContactForm from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Services, { Projects } from "../components/Services";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Projects />
      <Services />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
