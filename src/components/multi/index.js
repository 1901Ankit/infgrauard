 import React from "react";
import Carousel from "react-multi-carousel";
import image1 from "../../assests/images/icons/Compliance-certified-platform-1.svg";
import image2 from "../../assests/images/icons/ISO-PCI-DSS-AWS-certifications-1.svg";
import image3 from "../../assests/images/icons/Patch-Management-Access-Management-1.svg";
import image4 from "../../assests/images/icons/Server-Automation-Security-and-Compliance-1.svg";
const Multi = () => {
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
  ];
  return (
    <div className="">
      <div className="client_bg ">
        <div className="container logoclient mt-3">
          <div className="row mt-4  ">
            <div className="col-sm-12 text-left mt-5"
             data-aos="fade-right"
             data-aos-offset="20"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"
             data-aos-anchor-placement="top">
              <h3 className="lets ">
                Nurture your business with our certified platform
              </h3>
              <p className="mt-4 proc">
                Grow and manage your large infrastructure with Infraguard’s
                certified (ISO, PCI DSS, AWS) platform without worrying about
                patch management, access management, server automation, security
                and compliance and be the forefront in technology with us.
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

export default Multi;
