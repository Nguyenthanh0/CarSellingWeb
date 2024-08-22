import React from "react";
import "./NewsDetail.css";
import NDcar from "../images/newdetailCar.png";
import NDcar1 from "../images/newdetailCar1.png";
import Navbar from "../Components/NavBar";

function NewsDetail() {
  return (
    <div>
      <div className="Mews-Narbar">
        <Navbar></Navbar>
      </div>
      <div className="newdetail-body-thanh">
        <div className="newdetail-info-thanh">
          <h1>Lorem Ipsum</h1>
          <p>Homepage - Article - News - Lorem Ipsum</p>
          <img src={NDcar} alt="" />
        </div>
        <div className="info-cmt-newdetail">
          <p className="p-info-cmt-newdetail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            praesent gravida sed rutrum suspendisse eu. Lectus fermentum in
            gravida nibh in vel. Accumsan gravida nec ultricies risus eget arcu
            turpis sit lorem.{" "}
          </p>
          <p className="p-info-cmt-newdetail">
            Ullamcorper pellentesque diam eget volutpat. Ut senectus tincidunt
            elit sit vitae quam id. Quisque sed at elit sit viverra rutrum id id
            odio. Consequat, convallis iaculis dictum urna lectus fames arcu,
            at. Pretium venenatis pharetra, risus, sagittis rhoncus viverra nunc
            suspendisse facilisis.{" "}
          </p>
          <img src={NDcar1} alt="" />
          <div>
            <h3 style={{ fontSize: "30px", marginBottom: "15px" }}>Why?</h3>
            <ul className="ul-newdetail-thanh">
              <li>
                Leo amet, posuere nibh nam nulla vestibulum sagittis mauris.{" "}
              </li>
              <li>
                Elementum lacus, et sed praesent lectus nisi diam pulvinar eget.{" "}
              </li>
              <li>Vulputate nibh molestie cras dapibus. </li>
              <li>
                Blandit venenatis, commodo magnis dictumst ut consequat, etiam
                sed.{" "}
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: "30px", marginBottom: "15px" }}>How?</h3>
            <ul className="ul-newdetail-thanh">
              <li>
                Leo amet, posuere nibh nam nulla vestibulum sagittis mauris.{" "}
              </li>
              <li>
                Elementum lacus, et sed praesent lectus nisi diam pulvinar eget.{" "}
              </li>
              <li>Vulputate nibh molestie cras dapibus. </li>
              <li>
                Blandit venenatis, commodo magnis dictumst ut consequat, etiam
                sed.{" "}
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: "30px", marginBottom: "15px" }}>
              Finishing
            </h3>
            <p className="p-info-cmt-newdetail">
              Leo amet, posuere nibh nam nulla vestibulum sagittis mauris.
              Elementum lacus, et sed praesent lectus nisi diam pulvinar eget.
              Vulputate nibh molestie cras dapibus. Blandit venenatis, commodo
              magnis dictumst ut consequat, etiam sed. Scelerisque non diam ut
              aliquet placerat nibh. Porta sed turpis parturient eu arcu enim
              facilisis. Fermentum, blandit mollis dictumst volutpat. Risus odio
              enim sed a id risus, natoque in.
            </p>
          </div>
          <div>
            <ul className="ul-smallcmt-news">
              <li>Autopilot</li>
              <li>Car</li>
            </ul>
            <div className="line-news"></div>
            <div className="contact-user-newdetail"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
