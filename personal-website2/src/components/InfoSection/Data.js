import img1 from "../../images/linked_in_profile.jpg";
import img2 from "../../images/svg-2.svg";
import img3 from "../../images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Learn more:",
  headline: "About Me!",
  description: `I'm a 2nd year Computer Engineering student at the University of Waterloo. \n
I focus on development in Python and enjoy using the React and Django frameworks.`,
  buttonLabel: "Get started",
  imgStart: false,
  img: img1,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees",
  buttonLabel: "Learn More",
  imgStart: true,
  img: img2,
  alt: "Piggybank",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "services",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees",
  buttonLabel: "Start Now",
  imgStart: false,
  img: img3,
  alt: "Paper",
  dark: false,
  primary: false,
  darkText: true,
};
