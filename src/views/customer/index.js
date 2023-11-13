import React from "react";
import "./index.css";
import axcess from "../../assests/images/photo/Axcess.jpg";
import blazec from "../../assests/images/photo/Blazeclan.jpg";
import kuliza from "../../assests/images/photo/Kuliza.jpg";
import kulmos from "../../assests/images/photo/Kumolus.jpg";
import runon from "../../assests/images/photo/Sapphire-Infotech.jpg";
import tga from "../../assests/images/photo/The-Gate-Acedemy.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import Aos from "aos";

const Customer = () => {
  Aos.init({ able: "mobile" });
  let navigate = useNavigate();
  let handleClick = (val) => {
    navigate(val);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="customer">
        <div className="overlay">
          <h2 className="animate__animated animate__zoomInLeft maati">
            CUSTOMERS
          </h2>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col-sm-12 py-5 ">
            <h5
              className="trustedcustomer"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
             data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              TRUSTED BY GLOBAL LEADERS
            </h5>
            <h5
              className="few mt-3"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
             data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              Few of our customers
            </h5>
            <p
              className="inspr mt-3"
              data-aos="fade-right"
              data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                 data-aos-once="true"
                  data-aos-anchor-placement="top"
            >
              We are inspired by our valued client base who keeps appreciating
              us for our innovative ideas and solutions for cloud-servers. Our
              dedicated team continuously contributes towards the ever-changing
              world of cloud servers and its management. From understanding the
              very basic requirement of the client to the high-end need of the
              servers, we have been delivering top-notch server management
              services on time fulfilling the expectations of the clients.
            </p>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row ">
          <div
            className="col-sm-4 "
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
           data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <img src={axcess} className="w-100 axcs" />
          </div>
          <div
            className="col-sm-4 "
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
           data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <img src={blazec} className="w-100  axcs" />
          </div>
          <div
            className="col-sm-4 "
            data-aos="fade-up"
            data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                 data-aos-once="true"
                  data-aos-anchor-placement="top"
          >
            <img src={kuliza} className="w-100 axcs" />
          </div>
        </div>

        <div className="row kumle">
          <div
           className="col-sm-4 "
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
           data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <img src={kulmos} className="w-100  axcs" />
          </div>
          <div
           className="col-sm-4 "
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
           data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <img src={runon} className="w-100  axcs" />
          </div>
          <div
          className="col-sm-4 "
            data-aos="fade-up"
            data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                 data-aos-once="true"
                  data-aos-anchor-placement="top"
          >
            <img src={tga} className="w-100  axcs" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
