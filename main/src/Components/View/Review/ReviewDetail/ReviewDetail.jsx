import React from "react";
import Header from "../../../Header/Header";
import Content from "../../Content/Content";
import car01 from "../../../../img/Ford.png";
import ReviewComponent from "./ReviewAndComment/RaC";
import "./ReviewDetail.css";
const ReviewDetail = () => {
  return (
    <div>
      <Header />
      <Content
        title="Ford F-250 Super Duty"
        description=" Car Review - Ford F-250 "
      />
      <main
        style={{
          display: "flex",
          background: "black",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <img src={car01} className="Ford"></img>
        <div>
          <h2
            style={{
              color: " hsla(203, 100%, 39%, 1)",
              marginTop: "50px",
              position: "relative",
              right: "300px",
            }}
          >
            $82,098 - $92,050
          </h2>
        </div>
      </main>
    </div>
  );
};

export default ReviewDetail;
