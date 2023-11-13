import React from "react";
import "./index.css";
import { BsBank } from "react-icons/bs";
import { AiOutlineRotateLeft } from "react-icons/ai";
import { AiOutlineCloudServer } from "react-icons/ai";
import Button from "../../components/button";

import { NavLink, useNavigate } from "react-router-dom";
import Aos from "aos";
const Industrie = () => {
  Aos.init({ able: "mobile" });
  let navigate = useNavigate();
  let handleClick = (val) => {
    navigate(val);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="industry">
        <div className="overlay">
          <h2 className="animate__animated animate__rotateInUpRight maati">
            INDUSTRIES
          </h2>
        </div>
      </div>

      <div className="container  py-5  mt-5">
        <div className="row ">
          <div className="col-sm-6">
            <h3
              className="platform"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
           data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              A SINGLE PLATFORM FOR SERVER MANAGEMENT
            </h3>
            <h3
              className="hels mt-3"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
           data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              Infraguard works for enterprises across sectors.
            </h3>

            <div
              className="serve mt-3"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
           data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <p
                className="manag"
                data-aos="fade-right"
                data-aos-offset="20"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
             data-aos-once="true"
                data-aos-anchor-placement="top"              >
                Server Management have become a core component in our modern-day
                business operations. Every enterprise needs a reliable tool to
                manage all their servers under one single dashboard to build a
                strong online presence, thrive, and flourish. Businesses does
                require unified server management to ease and remove repeated
                task in managing multiple servers. So, even a small snag in the
                servers can bring operations to a grinding halt. With
                Infraguard’s multi-cloud management, we will ensure that your
                business operations run smoothly with 100% uptime.
             
              </p>
              <p
                className="manag"
                data-aos="fade-right"
                data-aos-offset="20"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
          data-aos-once="true"
             data-aos-anchor-placement="top"
              >
                Infraguard was successful in addressing the issues with multiple
                servers and its management. With clients in different sectors
                such as Banking, Telecommunication and Managed Service Providers
                (MSP), Infraguard have eased out the challenges of server
                management.
              </p>
            </div>
            <div
              className="men mt-4"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
           data-aos-once="true"
              data-aos-anchor-placement="top"
            ></div>
          </div>
          <div
            className="col-sm-6 view"
            data-aos="fade-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
         data-aos-once="true"
            data-aos-anchor-placement="top"
          ></div>
        </div>
      </div>

      <div className="container-fluid grey ">
        <div className="container">
    <div className="row">
      <div className="col-sm-12">

          <h2 className="across text-center">ENTERPRISES ACROSS SECTORS.</h2>
      </div>
    </div>
          
          <div className="row  sheight ">
            <div
              className="col-sm-4 bnkiw mt-5"
              data-aos="fade-up"
              data-aos-offset="20"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
          data-aos-once="true"
             data-aos-anchor-placement="top"
            >
              <div className="pron text-white p-5">
                <BsBank className="banker mt-2" />
                <h3 className="prv mt-2 "> Banking and Financial Services</h3>
                <p className="prtn mt-3">
                  Banks are often targeted hard irrespective of their market
                  size. Even smaller financial (FinServ) businesses are not
                  spared from cyber attacks.
                </p>
             
                <Button
                  onClick={() => {
                    handleClick("/banking");
                  }}
                  color="#ffffff"
                  padding="8px"
                  width="130px"
                  className="bun mt-3"
                >
                  Learn More
                </Button>
          
              </div>
            </div>
            <div
         className="col-sm-4 bnkiw mt-5"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
           data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <div className="tele p-5">
                <AiOutlineRotateLeft className=" banker" />
                <h3 className="prv mt-2">Telecommunication</h3>
                <p className="prtn mt-3">
                  Telecom sector can keep businesses, customers and consumers
                  safe and connected by modernising vulnerability management and
                  access management.
                </p>
             
                <Button
                  onClick={() => {
                    handleClick("/telecom");
                  }}
                  padding="8px"
                  width="130px"
                  className="bsun"
                >
                  Learn More
                </Button>
           
              </div>
            </div>
            <div
             className="col-sm-4 bnkiw mt-5"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
           data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <div className="pron text-white p-5">
                <AiOutlineCloudServer className=" banker" />
                <h3 className="prv mt-2">Managed Service Provider</h3>
                <p className="prtn mt-3">
                  Managed Services has been a fruitful model as it provides more
                  stability for clients on an ongoing basis and is less
                  expensive in the long run.
                </p>
           
                <Button
                  onClick={() => {
                    handleClick("/managed");
                  }}
              
                  color="#ffffff"
                  padding="7px"
                  width="130px"
                  className="bun mt-4"
                >
                  Learn More
                </Button>
             
              </div>
            </div>
          </div>
          
          </div>
      </div>
    </>
  );
};

export default Industrie;
