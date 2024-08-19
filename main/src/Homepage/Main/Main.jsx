import React, { useState } from "react";
import "./Main.css";
import RecommendedCars from "./RecommendedCars";
import cmtC from "../../images/commentCar.png";
import cmtC1 from "../../images/commentCar1.png";
import cmtC2 from "../../images/commentCar2.png";
import cmtUer from "../../images/cmtUser.png";
import car from "../RecommendedCars";
import auCar from "../../images/auCar.png";
import { IoCarSportOutline } from "react-icons/io5";
import { IoCar } from "react-icons/io5";
import { MdOutlineSell } from "react-icons/md";
import testimonialImg from "../../images/TestimonialImg.png";
import MapComponent from "./MapComponent";
import ContactForm from "./ContactForm";
import tlogo from "../../images/teslalogo.png";
import alogo from "../../images/audilogo.png";
import flogo from "../../images/fiatlogo.png";
import hlogo from "../../images/huyndailogo.png";
import plogo from "../../images/peugoetlogo.png";
import vlogo from "../../images/volvologo.png";

function Main() {
  const filteredCar2 = car.filter((car) => car.id === 2);
  const filteredCar3 = car.filter((car) => car.id === 3);

  const [activeOption, setActiveOption] = useState("New"); // Khởi tạo với giá trị mặc định
  const handleClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="main-thanh">
      <div className="recommendedCar">
        <h2 style={{ fontFamily: "sans-serif" }}>Recommended Cars</h2>
        <div className="option1">
          <h3
            className={`op2 ${activeOption === "New" ? "active" : ""}`}
            onClick={() => handleClick("New")}
          >
            New
          </h3>
          <h3
            className={`op2 ${activeOption === "Used" ? "active" : ""}`}
            onClick={() => handleClick("Used")}
          >
            Used
          </h3>
          <p>See more </p>
        </div>
        <div className="car-list-thanh">
          {car.map((car) => (
            <RecommendedCars key={car.id} car={car} />
          ))}
        </div>
      </div>
      <div className="compareCars">
        <h2
          style={{
            fontFamily: "sans-serif",
            color: "white",
            position: "relative",
            right: "321px",
          }}
        >
          Compared Cars
        </h2>
        <div className="ComparedCar">
          {filteredCar2.map((car) => (
            <RecommendedCars key={car.id} car={car}></RecommendedCars>
          ))}
          <h1 className="circle" style={{ fontSize: "36px" }}>
            VS
          </h1>
          {filteredCar3.map((car) => (
            <RecommendedCars key={car.id} car={car}></RecommendedCars>
          ))}
        </div>
        <button className="comparedBtn">Compare Car</button>
      </div>
      <div className="comment">
        <div style={{ marginBottom: "30px" }} className="option1">
          <h3
            className={`op3 ${activeOption === "News" ? "active" : ""}`}
            onClick={() => handleClick("News")}
          >
            News
          </h3>
          <h3
            className={`op3 ${activeOption === "Reviews" ? "active" : ""}`}
            onClick={() => handleClick("Reviews")}
          >
            Reviews
          </h3>
        </div>
        <div className="cmtImg">
          <div className="firstCmt">
            <div className="time">June, 01 2021</div>
            <img src={cmtC} alt="" />
            <div className="cmtOfCustemer">
              <h2>Etiam Eget</h2>
              <p style={{ fontSize: "16px", width: "405px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget praesent gravida sed rutrum suspendisse eu.{" "}
              </p>
              <div
                className="cmtUer"
                style={{ display: "flex", alignItems: "center", gap: "21px" }}
              >
                <img src={cmtUer} alt="" />
                <p style={{ fontSize: "14px" }}>By Carla Baptista</p>
              </div>
            </div>
          </div>
          <div className="nextCmt">
            <dir className="secondCmt">
              <img src={cmtC2} />
              <div className="cmtOfCustemer">
                <h3 style={{ fontSize: "24px", color: "#007CC7" }}>
                  A NEW CAR
                </h3>
                <p style={{ fontSize: "18px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <img src={cmtUer} style={{ width: "24px", height: "24p" }} />
                  <p style={{ fontSize: "14px" }}>
                    By Carla Baptista - May, 28 2021
                  </p>
                </div>
              </div>
            </dir>
            <dir className="secondCmt">
              <img src={cmtC1} />
              <div className="cmtOfCustemer">
                <h3 style={{ fontSize: "24px", color: "#007CC7" }}>
                  A NEW CAR
                </h3>
                <p style={{ fontSize: "18px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <img src={cmtUer} style={{ width: "24px", height: "24p" }} />
                  <p style={{ fontSize: "14px" }}>
                    By Carla Baptista - May, 28 2021
                  </p>
                </div>
              </div>
            </dir>
          </div>
        </div>
      </div>
      <div className="au">
        <h1
          className="h1au"
          style={{ fontSize: "36px", fontWeight: "700", color: "white" }}
        >
          About Us
        </h1>
        <div style={{ display: "flex", gap: "80px" }}>
          <div className="au-inf">
            <p style={{ fontSize: "20px", color: "#D7D7D7", width: "420px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
              aliquet tortor ut sit sit. Velit imperdiet integer elementum a
              scelerisque pulvinar venenatis sodales. Quis nulla euismod feugiat
              at interdum in. Venenatis arcu semper lectus quis sit in rhoncus
              auctor.
            </p>
            <div style={{ display: "flex", gap: "110px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "48px",
                    fontFamily: "sans-serif",
                  }}
                  className="auUnderline"
                >
                  150
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <div className="line1"></div>
                  <div className="line2"></div>
                </div>
                <p className="auUnderline">Vehicle In Stock</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "48px",
                    fontFamily: "sans-serif",
                  }}
                  className="auUnderline"
                >
                  40
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <div className="line1"></div>
                  <div className="line2"></div>
                </div>
                <p className="auUnderline">Sold Car</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "110px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "48px",
                    fontFamily: "sans-serif",
                  }}
                  className="auUnderline"
                >
                  38
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <div className="line1"></div>
                  <div className="line2"></div>
                </div>
                <p className="auUnderline">Happy Customer</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "48px",
                    fontFamily: "sans-serif",
                  }}
                  className="auUnderline"
                >
                  5
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <div className="line1"></div>
                  <div className="line2"></div>
                </div>
                <p className="auUnderline">Awards</p>
              </div>
            </div>
          </div>
          <img src={auCar} alt="" />
        </div>
      </div>
      <div className="main-end">
        <div className="OurService" style={{ padding: "0px 20px" }}>
          <h2
            style={{ color: "white", fontWeight: "500", marginBottom: "20px" }}
          >
            Our Service
          </h2>
          <div className="osIcon">
            <div>
              <IoCarSportOutline className="os-icon" />
              <h3>Buy a new car</h3>
            </div>
            <div>
              <IoCar className="os-icon" />
              <h3>Buy a new car</h3>
            </div>
            <div>
              <MdOutlineSell className="os-icon" />
              <h3>Buy a new car</h3>
            </div>
          </div>
        </div>
        <div className="Testimonial">
          <h2
            style={{
              color: "white",
              fontWeight: "500",
              marginBottom: "20px",
              position: "relative",
              left: "15px",
            }}
          >
            Testimonial
          </h2>
          <div>
            <div className="triangle"></div>
            <div className="Testimonial-info">
              <img src={testimonialImg} className="testimonialImg" />
              <div>
                <h2 style={{ color: "#007CC7", fontWeight: "500" }}>
                  Omar Mango
                </h2>
                <h3
                  style={{
                    color: "#007CC7",
                    fontWeight: "400",
                    marginBottom: "30px",
                  }}
                >
                  Customer
                </h3>
                <p style={{ width: "547px", fontSize: "18px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  vel aliquet tortor ut sit sit. Velit imperdiet integer
                  elementum a scelerisque pulvinar venenatis sodales. Quis nulla
                  euismod feugiat at interdum in. Venenatis arcu semper lectus
                  quis sit in rhoncus auctor.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mapContact">
          <MapComponent></MapComponent>
          <div className="mapContact-contact">
            <h1 style={{ color: "white", fontSize: "36px", fontWeight: "700" }}>
              Contact
            </h1>
            <ContactForm></ContactForm>
          </div>
        </div>
        <div className="carLaga">
          <div className="carLogo">
            <img src={tlogo} alt="" />
            <img src={alogo} alt="" />
            <img src={flogo} alt="" />
            <img src={hlogo} alt="" />
            <img src={plogo} alt="" />
            <img src={vlogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
