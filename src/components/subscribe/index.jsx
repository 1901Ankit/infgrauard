import React from "react";
import "./index.css";
import Button from "../button";
import { Link } from "react-router-dom";
const Subscribe = () => {
  return (
    <div className="">
    <div className="subscribe_bg mt-1">
      <div className="subscribe_bg_overlay">
        <div className="container updn">
          <div className="row "
           data-aos="fade-right"
           data-aos-offset="20"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="true"
           data-aos-anchor-placement="top">
            <div className="col-sm-10 ">
              <h4 className="sofar text-white ">
                So, ready to make your cloud servers Safe and Secure with
                Infraguard?
              </h4>
              <p className="infra text-white">
                Infraguard helps you modernize your systems and servers, so your
                system is safe and secured with the latest solutions to compete
                in this competitive economy.
              </p>
             
                  </div>
                <div className=" col-sm-2 butsn">
                <Link to={"/"}>
                  <Button
                    text="uppercase"
                    padding="12px"
                    width="100%"
                    border="none"
                    className="button mt-5"
                    bb="none"
                  >
                    GET DEMO
                  </Button>
                  </Link>
                </div>
             
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Subscribe;
