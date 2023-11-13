import React from "react";
import Carousel from "react-multi-carousel";

import image1 from "../../assests/images/icons/Automate-Daily-Operations.svg";
import image3 from "../../assests/images/icons/Cost-reductions.svg";
import image2 from "../../assests/images/icons/Automate-large-server-infrastructures.svg";
import image4 from "../../assests/images/icons/Minimal-workforce-training.svg";
import image5 from "../../assests/images/icons/Self-service-server-management-platform.svg";

const Multicarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
  let images = [
    {
      img: image1,
    },
    {
      img: image2,
    },
    {
      img: image3,
    },
    {
      img: image4,
    },
    {
      img: image5,
    },
   
  ];
  return (
    <div className="">
      <div className="client_bg ">
        <div className="container logoclient ">
          <div className="row mt-4  ">
            <div
              className="col-sm-12 featt automata "
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <h3 className="lets mt-4">Automate daily operations</h3>
              <p className="mt-4 proc">
                Infraguard’s self-service Server Management platform allows
                mid-to large scale enterprises across sectors to manage and
                automate large server infrastructures with less training and
                skill requirements and significant cost reductions.
              </p>
            </div>
          </div>
          <Carousel
            responsive={responsive}
            arrows={false}
            className="text-center"
            showDots={false}
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}
          >
            {images.map((val) => (
              <img src={val.img} alt="" height="165px" className="mt-4" />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Multicarousel;
