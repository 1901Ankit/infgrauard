import React, { useState } from "react";
import "./index.css";
import { FaBook } from "react-icons/fa";
import axcess from "../../assests/images/photo/Axcess.jpg";
import blazec from "../../assests/images/photo/Blazeclan.jpg";
import kuliza from "../../assests/images/photo/Kuliza.jpg";
import kulmos from "../../assests/images/photo/Kumolus.jpg";
import runon from "../../assests/images/photo/Sapphire-Infotech.jpg";
import tga from "../../assests/images/photo/The-Gate-Acedemy.jpg";
import Button from "../../components/button";
import {useNavigate } from "react-router-dom";
import Aos from "aos";
const Casestudy = () => {
  Aos.init({ able: "mobile" });
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const [shows, setShows] = useState(false);
  const [showss, setShowss] = useState(false);
  const [showsss, setShowsss] = useState(false);
  const [showssss, setShowssss] = useState(false);

  const showHandler = () => {
    setShow(!show);
    setHide(!hide);
    setShows(!shows);
    setShowss(!showss);
    setShowsss(!showsss);
    setShowssss(!showssss);
  };
  let navigate = useNavigate();
  let handleClick = (val) => {
    navigate(val);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="case">
        <div className="overlay">
          <h2 className="animate__animated animate__backInRight maati">
            CASE STUDY
          </h2>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div
            className="col-sm-12 mt-5"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <h2 className="with">A SINGLE PLATFORM FOR SERVER MANAGEMENT</h2>
          </div>

          <div
            className="col-sm-12 mt-2"
            data-aos="fade-down"
            data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
          >
            <h2 className="hep">
              Infraguard works for enterprises across sectors.
            </h2>
          </div>

          <div
            className="col-sm-12 mt-3"
            data-aos="fade-down"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <p className="para">
              Working with large organizations in multiple industries, we’ve
              helped hundreds of customers transform their infrastructure
              operations and envision disruptive strategies. Find out how we
              create growth, implement cloud technology and help creating ease
              of infrastructure management in super secured way.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row ">
          <div
            className="col-sm-4 my-2"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
            onMouseOver={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <img src={axcess} className="w-100" />
            <div className={`${show ? "test2" : "test"}`}></div>
            <div className="axceshead shadow">
              <FaBook className="book mx-2" />
              Axcess
            
            </div>

            <div className={`${show ? "jay2" : "jay"}`}>
              <div className="shadow hshs">
                How Axcess enhanced their Managed Services Automation Capability
                with Infraguard and scaled up their services.
              
                <Button
                  onClick={() => {
                    handleClick("/axcess");
                  }}
                  text="uppercase"
                  padding="8px"
                  width="50%"
                  border="none"
                  className="button mt-3"
                  bb="none"
                >
                  Read More
                </Button>
             
              </div>
            </div>
          </div>

          <div
            className="col-sm-4 my-2"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
            onMouseOver={() => setHide(true)}
            onMouseLeave={() => setHide(false)}
          >
            <img src={blazec} className="w-100" />
            <div className={`${hide ? "test3" : "test"}`}></div>
            <div className="axceshead shadow">
              <FaBook className="book mx-2" />
              Blazeclan
            </div>
            <div className={`${hide ? "jay3" : "jay"}`}>
              <div className="shadow hshs">
                How Blazeclan automated Patch Management with Infraguard and
                saved time by building a seamless workflow.
              
                <Button
                  onClick={() => {
                    handleClick("/blaze");
                  }}
                  text="uppercase"
                  padding="12px"
                  width="50%"
                  border="none"
                  className="button mt-3"
                  bb="none"
                >
                  Read More
                </Button>
             
              </div>
            </div>
          </div>
        

          <div
            className="col-sm-4 my-2"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
            onMouseOver={() => setShowss(true)}
            onMouseLeave={() => setShowss(false)}
          >
            <img src={kuliza} className="w-100" />
            <div className={`${showss ? "test2" : "test"}`}></div>
            <div className="axceshead shadow">
              <FaBook className="book mx-2" />
              Kuliza
            </div>
            <div className={`${showss ? "jay2" : "jay"}`}>
              <div className="shadow hshs">
                How Kuliza’s Financial Industry Product Lend.in used Infraguard
                for easy post-installation management.
           
                <Button
                  onClick={() => {
                    handleClick("/kulzia");
                  }}
                  text="uppercase"
                  padding="12px"
                  width="50%"
                  border="none"
                  className="button mt-3"
                  bb="none"
                >
                  Read More
                </Button>
              
              </div>
            </div>
          </div>
        </div>

        <div className="row kumle ">
          <div
            className="col-sm-4 mb-2"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
            onMouseOver={() => setShowsss(true)}
            onMouseLeave={() => setShowsss(false)}
          >
            <img src={kulmos} className="w-100" />
            <div className={`${showsss ? "test2" : "test"}`}></div>
            <div className="axceshead shadow">
              <FaBook className="book mx-2" />
              Kumolus
            </div>
            <div className={`${showsss ? "jay2" : "jay"}`}>
              <div className="shadow hshs">
                Australia’s leading Cloud Management & Governance Solution
                integrates with Infraguard to enhance server management.
           
                <Button
                  onClick={() => {
                    handleClick("/kulmos");
                  }}
                  text="uppercase"
                  padding="12px"
                  width="50%"
                  border="none"
                  className="button mt-3"
                  bb="none"
                >
                  Read More
                </Button>
             
              </div>
            </div>
          </div>

          <div
            className="col-sm-4 mb-2"
            data-aos="fade-up"
            data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
            onMouseOver={() => setShowssss(true)}
            onMouseLeave={() => setShowssss(false)}
          >
            <img src={runon} className="w-100" />

            <div className={`${showssss ? "test2" : "test"}`}></div>
            <div className="axceshead shadow">
              <FaBook className="book mx-2" />
              Sapphire Infotech
            </div>
            <div className={`${showssss ? "jay2" : "jay"}`}>
              <div className="shadow hshs">
                How Sapphire Infotech built a highly secure and scalable Managed
                Services Capability with Infraguard.
              
                <Button
                  onClick={() => {
                    handleClick("/runon");
                  }}
                  text="uppercase"
                  padding="12px"
                  width="50%"
                  border="none"
                  className="button mt-3"
                  bb="none"
                >
                  Read More
                </Button>
              
              </div>
            </div>
          </div>

          <div
            className="col-sm-4 mb-2"
            data-aos="fade-up"
            data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
            onMouseOver={() => setShows(true)}
            onMouseLeave={() => setShows(false)}
          >
            <img src={tga} className="w-100" />

            <div className={`${shows ? "test2" : "test"}`}></div>
            <div className="">
              <div className="axceshead shadow">
                <FaBook className="book mx-2" />
                The Gate Acedemy
              </div>
              <div className={`${shows ? "jay2" : "jay"}`}>
                <div className="shadow hshs">
                  One of India’s top Education company lowers infrastructure ops
                  costs and cloud server management with Infraguard.
           
                  <Button
                    onClick={() => {
                      handleClick("/tga");
                    }}
                    text="uppercase"
                    padding="12px"
                    width="50%"
                    border="none"
                    className="button mt-3"
                    bb="none"
                  >
                    Read More
                  </Button>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Casestudy;
