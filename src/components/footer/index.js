import React from "react";
import "./index.css";
import logo from "../../assests/images/logo/Infraguard-Logo-3d.png";
import { FaFacebook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import data from "../../assests/data/data";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  let navigate = useNavigate();
  let handleClick = (val) => {
    navigate(val);
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="overl">
        <div className="container ">
          <div className="row ">
            <div className="col-sm-5 mt-5">
              <div className="logs">
                <NavLink to="/">
                  <img src={logo} className="inflogo" />
                </NavLink>
              </div>
              <p
                className="text-white text-justify mt-3 intad"
                style={{ width: "75%" }}
              >
                Infraguard is an ISO & SOC2 TYPE 2 Certified secure Server
                Management Application that works with all cloud providers to
                automate managed services & processes.
              </p>
            </div>
            <div className="col-sm-7">
              <div className="row navigations">
                <div className=" col-sm-4 mt-5 ">
                  <div className="tag mt-3">Navigation</div>

                  <div className="mt-4 ">
                    {data.footerlist1.map((val) => (
                      <a
                        href={
                          val.url == "/support"
                            ? "https://help.infraguard.io/support/home"
                            : val.url
                        }
                        onClick={
                          val.url == "/support"
                            ? () => {}
                            : () => {
                                handleClick(val.url);
                              }
                        }
                        className="navtag signtags"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        {val.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className=" col-sm-4 legalss ">
                  <div className="tag mt-3">Legal</div>

                  <div className="mt-4">
                    {data.footerlist2.map((val) => (
                      <a
                        href={val.url}
                        onClick={() => {
                          handleClick(val.url);
                        }}
                        className="navtag signtags"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        {val.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className=" col-sm-4 legalss ">
                  <div className="tag mt-3">Contact Us</div>

                  <div className="navtag ">
                    <a href="/contact-us" className="navtag ">
                      <p className="text-white pb-0 mb-1 fw-bold signtags proc">
                        HEADQUARTER
                      </p>
                    </a>
                    <p className="text-white pb-0  navtag bridge">
                      #18-03, 1 North Bridge Road,
                    </p>
                    <p className="text-white pb-0 navtag">
                      Singapore – 179094
                    </p>
                    <div className="isc">
                      <BsFillTelephoneFill
                        size={16}
                        className="text-white"
                      />
                      <span className="text-white ms-2 navtag">
                        +65 8363 8464
                      </span>
                    </div>
                    <div className="mt-2 isc">
                      <AiFillMail size={16} className="text-white" />
                      <span className="text-white ms-3 navtag">
                        contact@infraguard.io
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container wries">
          <div className="row">
            <div className="col-sm-12 mt-5">
              <p className="copy text-white text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="d-flex ">
                    <div className="social_icon pointer">
                      <a href="https://www.facebook.com/infraguardio/">
                        <FaFacebook color="#ffffff" size={15} />
                      </a>
                    </div>

                    <div className="social_icon pointer ms-3">
                      {" "}
                      <a href="https://twitter.com/InfraguardIo">
                        <AiOutlineTwitter color="#ffffff" size={18} />
                      </a>
                    </div>

                    <div className="social_icon pointer ms-3">
                      <a href="https://www.instagram.com/infraguard.io/">
                        <AiOutlineInstagram color="#ffffff" size={18} />
                      </a>
                    </div>

                    <div className="social_icon pointer ms-3 ">
                      <a href="https://www.linkedin.com/company/infraguard-software-service-llp/">
                        <AiFillLinkedin color="#ffffff" size={18} />
                      </a>
                    </div>
                    <div className="social_icon pointer ms-3 ">
                      <a href="https://www.youtube.com/channel/UCqiVw1WmRsp1N3g1_XHbDdA/featured%20">
                        <AiFillYoutube color="#ffffff" size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-3 copywrite">
                  © Copyright 2022 Infraguard Inc. All rights reserved.
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
