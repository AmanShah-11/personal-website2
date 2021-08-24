import React from "react";
import ProjectModal from "../components/Modal";
const SignInPage = () => {
  return (
    <>
      {/* // <div> */}
      {/* <h1>Sign in Page</h1> */}
      <iframe
        src={process.env.PUBLIC_URL + "AmanShah-Resume.pdf"}
        style={{
          position: "fixed",
          display: "block",
          background: "#000",
          border: "none",
          height: "100vh",
          width: "100vw",
        }}
      />
      {/* <h1>Test</h1> */}
      {/* </div> */}
    </>
  );
};

export default SignInPage;
