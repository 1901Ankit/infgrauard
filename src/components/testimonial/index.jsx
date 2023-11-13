import React from "react";
import Carousel from "react-multi-carousel";
import "./index.css";
import hole from "../../assests/images/icons/Axcess.io_-3.svg";
import fin from "../../assests/images/icons/iScale-Solutions-1.svg";
import holle from "../../assests/images/icons/Kuliza-2.svg";
import hep from "../../assests/images/icons/Cloud-Comrade-2.svg";
import oprt from "../../assests/images/icons/Kumolus-1.svg";
import glob from "../../assests/images/icons/The-Gate-Academy-1.svg";

const Multicarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      showDots={false}
      autoPlay={true}
      autoPlaySpeed={2000}
      infinite={true}
    >
      <div className="testi bg-white mt-3"
      data-aos="fade-right"
      data-aos-offset="20"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
       data-aos-once="true"
      data-aos-anchor-placement="top">
        <p className="mt-2 testcale">
          Infraguard allows us to scale faster with new clients. Their
          single-view, multi-functional dashboard is easy to train on and
          ensures proper Role Based server access while deploying enhanced
          automation for all processes.
        </p>

        <div className="NASA ">
          <div className="col-sm-3">
            <img src={hole} className="hole " />
          </div>
          <div className="col-sm-9  mt-3 ms-2">
            <span className="testmio">Prakash Kumar</span>
            <p className=" isco ">CEO, Axcess.io</p>
          </div>
        </div>
      </div>

      <div className="testi bg-white  mt-3"
      data-aos="fade-right"
      data-aos-offset="20"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
       data-aos-once="true"
      data-aos-anchor-placement="top">
      <p className="mt-2 testcale">
          Operating in the Financial Industry, security is paramount to us. Our
          software installations needed to remain updated while retaining our
          internal and external security policies. Infraguard’s Patch Management
          is the solution.
        </p>

        <div className="NASA ">
          <div className="col-sm-3">
            <img src={holle} className="hole " />
          </div>

          <div className="col-sm-9  mt-3 ms-2">
            <span className="testmio">Anand</span>
            <p className=" isco ">Founder, Kuliza</p>
          </div>
        </div>
      </div>
      <div className="testi bg-white  mt-3"
      data-aos="fade-right"
      data-aos-offset="20"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
       data-aos-once="true"
      data-aos-anchor-placement="top">
      <p className="mt-2 testcale">
          Infraguard allows us to comply better with ISO certification
          requirements and cloud platform provide best practices by giving us
          greater control over compliance and process automation. It helped in
          brand trust.
        </p>

        <div className="NASA ">
          <div className="col-sm-3">
            <img src={hep} className="hole " />
          </div>
          <div className="col-sm-9  mt-3 ms-2">
            <span className="testmio">Andy Waroma</span>
            <p className=" isco ">CEO, Cloud Comrade</p>
          </div>
        </div>
      </div>
      <div className="testi bg-white  mt-3"
      data-aos="fade-right"
      data-aos-offset="20"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
       data-aos-once="true"
      data-aos-anchor-placement="top">
      <p className="mt-2 testcale">
          Our Global Cloud Cost Optimisation, Compliance, Security and
          Governance clients often had server-specific actions that could be
          automated. Integrating with InfraGuard API meant access from the
          single dashboard.
        </p>
        <div className="NASA ">
          <div className="col-sm-3">
            <img src={oprt} className="hole " />
          </div>
          <div className="col-sm-9  mt-3 ms-2">
            <span className="testmio">Michael Salleo</span>
            <p className=" isco ">Co-Founder & CTO, Kumolus</p>
          </div>
        </div>
      </div>
      <div className="testi bg-white  mt-3"
      data-aos="fade-right"
      data-aos-offset="20"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
              data-aos-once="true"
             data-aos-anchor-placement="top">
      <p className="mt-2 testcale">
          Operating in the rapidly growing education industry, technology is the
          backbone. With Infraguard, we were able to simplify our server
          management and automation and policy-based accesses were implemented.
        </p>
        <div className="NASA ">
          <div className="col-sm-3">
            <img src={glob} className="hole " />
          </div>
          <div className="col-sm-9  mt-3 ms-2">
            <span className="testmio">Vineet Gupta</span>
            <p className=" isco ">COO, THE GATE ACADEMY</p>
          </div>
        </div>
      </div>
      <div className="testi bg-white  mt-3"
      data-aos="fade-right"
      data-aos-offset="20"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
       data-aos-once="true"
      data-aos-anchor-placement="top">
      <p className="mt-2 testcale">
          We relied on Infraguard’s patch management and access management to
          ensure compliance and process automations for our Managed Services.
          Infraguard’s solution saved our time and costing in addressing issue.
        </p>
        <div className="NASA ">
          <div className="col-sm-3">
            <img src={fin} className="hole " />
          </div>
          <div className="col-sm-9  mt-3 ms-2">
            <span className="testmio">Iannis Hanen</span>
            <p className=" isco ">CEO, iScale Solutions</p>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Multicarousel;
