import React, { useState } from "react";
import Icon4 from "../../images/svg-4.svg";
import Icon5 from "../../images/svg-5.svg";
import Icon6 from "../../images/svg-6.svg";
import ProjectModal from "../Modal";

import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  const [dataindex, setDataIndex] = useState(0);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = (index) => {
    setDataIndex(index);
    setShowModal(true);
  };

  const data = [
    {
      title: "Automatic Event Scheduler",
      description: "Very lengthy description for my project",
      github: "https://github.com/AmanShah-11/django-google",
    },
    {
      title: "Facial Recognition System",
      description: "Very lengthy description for my project",
      github: "https://github.com/AmanShah-11/django-google",
    },
    {
      title: "Bank Loan System",
      description: "Very lengthy description for my project",
      github: "https://github.com/AmanShah-11/django-google",
    },
  ];

  return (
    <>
      <ProjectModal
        showModal={showModal}
        handleClose={handleClose}
        data={data[dataindex]}
      />
      <ServicesContainer id="services">
        <ServicesH1>My Projects</ServicesH1>
        <ServicesWrapper>
          <ServicesCard onClick={() => handleShow(0)}>
            <ServicesIcon src={Icon4} />
            <ServicesH2>Automatic Event Scheduler</ServicesH2>
            <ServicesP>
              Event Scheduler that adds to your Google Calendar automatically
            </ServicesP>
          </ServicesCard>
          <ServicesCard onClick={() => handleShow(1)}>
            <ServicesIcon src={Icon5} />
            <ServicesH2>Virtual offices</ServicesH2>
            <ServicesP>Access our platform online anywhere!</ServicesP>
          </ServicesCard>
          <ServicesCard onClick={() => handleShow(2)}>
            <ServicesIcon src={Icon6} />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>Unlock our special membership cards!</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
