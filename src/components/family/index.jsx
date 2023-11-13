import React from "react";
import Carousel from "react-multi-carousel";
import "./index.css";
import Aos from "aos";

const Multicarousel = () => {
  Aos.init({ able: "mobile" });
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
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
      autoPlaySpeed={2500}
      infinite={true}
    >
      <div
        className=" 
             "
        data-aos="fade-right"
        data-aos-offset="20"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top"
      >
        <h3 className="text-white manged ">MANAGED SERVICES AUTOMATION</h3>
      </div>
      <div className="">
        <h3 className="text-white manged ">MULTI-CLOUD MANAGEMENT</h3>
      </div>

      <div className="">
        <h3 className="text-white manged ">UNIFIED SERVER MANAGEMENT</h3>
      </div>
      <div className="">
        <h3 className="text-white manged ">CONTROL CENTRE FOR SERVERS</h3>
      </div>
    </Carousel>
  );
};

export default Multicarousel;
