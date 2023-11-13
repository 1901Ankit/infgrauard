import React from "react";
import "./index.css";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";
import Aos from "aos";

const Contact = () => {
  Aos.init({ able: "mobile" });
  return (
    <div>
      <div className="contact">
        <div className="overlay">
          <h2 className="animate__animated animate__zoomInLeft maati">
            CONTACT US
          </h2>
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className="lets mt-5">Let’s Start a Conversation</h2>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-sm-12 text-center">
            <p className="infra">
              Infraguard is here to help and answer any question you might have.
              We look forward to hearing from you.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3"></div>
          <div
            className="col-sm-3"
            data-aos="fade-left"
            data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                data-aos-once="true"
                  data-aos-anchor-placement="top"
          >
            <IoIosCall className="phone mx-1" />
            <span className="span ms-2">PHONE</span>
            <p className=" paragraph ms-2">+65 8363 8464.</p>
          </div>
          <div
            className="col-sm-3"
            data-aos="fade-left"
            data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                data-aos-once="true"
                  data-aos-anchor-placement="top"
          >
            <IoMdMail className="phone mx-1" />
            <span className="span ms-2">EMAIL</span>
            <p className="paragraph ms-2">contact@infraguard.io</p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 map mt-5"></div>

          <div
            className="col-sm-3  px-5
"
          >
            <FaBuilding className="building " />
            <span className="span ms-2">SINGAPORE</span>
            <p className="paragraph ms-1">
              #18-03, 1 North Bridge Road, Singapore – 179094
            </p>
            <FaBuilding className="house" />
            <span className="span ms-2">INDIA</span>

            <p
              className="gururam mt-3"
              data-aos="fade-left"
              data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                data-aos-once="true"
                  data-aos-anchor-placement="top"
            >
              GURUGRAM
            </p>
            <p
              className=" paragraph"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"            >
              932 Sector 14, India (Gurgaon) 122001
            </p>
            <p
              className="gururam"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              MUMBAI
            </p>
            <p
              className="paragraph"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              1401, 14th floor,B-Wing,The Great Eastern Summit, Plot-66, Sector
              15, CBD Belapur, Navi Mumbai, Maharashtra 400614
            </p>
            <div
              className="mt-3"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <FaBuilding className="house " />

              <span className="span ms-2">USA</span>
            <p
              className=" paragraph"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"              >
              65 N Broad St Suite 201, Middletown, New Castle, 19709, Delaware
            </p>

              </div>
            <div
              className=""
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <FaBuilding className="house " />
              <span
                className="span ms-2"
                data-aos="fade-left"
                data-aos-offset="20"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                AUSTRALIA
              </span>
              <p
                className=" paragraph"
                data-aos="fade-left"
                data-aos-offset="20"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                13 LIDDIARD STREET HAWTHORN VIC Melbourne, vic, 3122, Australia
              </p>
            </div>

            <div
              className=""
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <FaBuilding className="house " />
              <span
                className="span ms-2"
                data-aos="fade-left"
                data-aos-offset="20"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                UK
              </span>
              <p
                className=" paragraph"
                data-aos="fade-left"
                data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                data-aos-once="true"
                  data-aos-anchor-placement="top"
              >
                3 Kenilworth Gardens, Staines , London (UK)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
