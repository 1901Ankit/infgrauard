import React from "react";
import Carousel from "react-multi-carousel";
import "./index.css";

const Multicarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
      <div className=" bg-white widtt mt-5">
        <h3 className="with">1. Patch Management</h3>
        <p className="aotcat">
          Scanning & Installing Patches across a large infrastructure rapidly
          becomes a pain point. No wonder so many enterprises leave their
          servers unpatched and open to security threats! InfraGuard gives
          On-Demand and Automated Patching Actions, fully customizable to your
          requirement.
        </p>
      </div>
      <div className=" bg-white widtt mt-5">
        <h3 className="with">2. Access Management</h3>
        <p className="aotcat">
          The strongest locks will fail if the keys are lying around! Your
          servers need perfect Key Management, Central Policies, Auto-Rotation,
          Just-in-Time Access and much more. All are available in InfraGuard at
          a button click!
        </p>
      </div>

      <div className=" bg-white widtt mt-5">
        <h3 className="with">3. SOP Automation</h3>
        <p className="aotcat">
          Manual repetitive tasks are not only time-consuming, but they are also
          error-prone. With an Open API, in-built script repository and
          unlimited customization, InfraGuard provides supercharged process
          automation.
        </p>
      </div>
      <div className=" bg-white widtt mt-5">
        <h3 className="with">4. CMDB on AWS</h3>
        <p className="aotcat">
          Are you aware of the changes happening in your environment? When was
          the last time you could audit all of them from a single place? Watch
          your Asset Inventory and set alerts on critical changes with our CMDB
          Solution.
        </p>
      </div>

      <div className=" bg-white widtt mt-5 ">
        <h3 className="with">5. WAF</h3>
        <p className="aotcat">
          Well Architected Framework is building secure, high-performing,
          flexible and efficient infrastructure for different applications and
          workloads. It basically describes key concepts; design principles and
          best architectural practices.
        </p>
      </div>
    </Carousel>
  );
};

export default Multicarousel;
