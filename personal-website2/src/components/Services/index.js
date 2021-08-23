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
      description: `I built this application to help users schedule events when they have a general idea of what they want to do, but don't have a specific location in mind! \n
The application takes in information from user input and returns the location of the event and creates an event for it with the invited user in Google Calendar (performed in Django)
These events are then displayed in the React frontend so that users can easily see all of their events and whether they have been completed or not (based on the date or the event).
Users can register for the app through a simple user Django form that takes in basic information. \n
The React App offers basic CRUD functionality, however the implementation with the Google API is limited to the Django form to allow the user several ways to schedule events with others. \n
The Google APIs that I used include:
  Google Geocoding API
  Google Maps API
  Google Roads API (Future implementation of this app will allow users to get directions to the specified location).
  Google Calendar API \n
The things used to build this application include:
  Django
  Django Rest Framework
  Python
  React
  HTML
  CSS
  Javascript`,
      github: "https://github.com/AmanShah-11/django-google",
    },
    {
      title: "Facial Recognition System",
      description: `I made this project using AWS, Python, Django for the backend system and React for the frontend system. \n
What this does it that it looks for existing users in the system and sees if the current user matches with the one present. \n
If a match has occured, the user is allowed into the system, otherwise the user is locked from the system for a certain amount of time.`,
      github: "https://github.com/AmanShah-11/django_opencv",
    },
    {
      title: "Bank Loan System",
      description: `This project uses python, tensorflow and Django to determine whether a user would be approved or rejected for a loan. \n
The front-end form is built in Django, with the machine learning model built in Tensorflow, and all of the data manipulation done in python libraries such as pandas, numpy, scipy and tensorflow. \n
The machine learning model takes in 13 different factors from the user including:
  Dependents
  Applicant and CoApplicant Income
  LoanAmount
  Loan_Amount_Term
  Credit_History
  Gender
  Married
  Education
  Self_Employed
  Property_Area`,
      github: "https://github.com/AmanShah-11/django_bankloan",
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
            <ServicesH2>Facial Recognition System</ServicesH2>
            <ServicesP>
              Login to your system using facial recognition!
            </ServicesP>
          </ServicesCard>
          <ServicesCard onClick={() => handleShow(2)}>
            <ServicesIcon src={Icon6} />
            <ServicesH2>Bank Loan Approval System</ServicesH2>
            <ServicesP>See if you would be approved for a bank loan!</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
