import React from "react";
import "./Styles/PageNotFound.css";
import PageNotFound_png from "../../PageNotFound.png";

const PageNotFound = () => {
  return (
    <div id="wrapper">
      <div id="info">
        <img
          src={PageNotFound_png}
          alt="404 || Error || Page Not Found"
          style={{
            width: "90%",
            height: "90%",
            marginTop: "-150px",
          }}
        />
        {/* <h2>404 Error: Page Not Found</h2> */}
      </div>
    </div>
  );
};

export default PageNotFound;
