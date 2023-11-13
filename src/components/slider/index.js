import React from "react";
import Carousel from "react-multi-carousel";
import image4 from "../../assests/images/icons/On-Premise.svg";
import image1 from "../../assests/images/icons/AWS.svg";
import image2 from "../../assests/images/icons/Azure.svg";
import image3 from  "../../assests/images/icons/Google-GCP.svg";

const Slider = () => {
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
        <div className="container logoclient mt-5">
          <div className="row mb-4 ">
            <div className="col-sm-12 text-left mt-5">
              <h3 className="lets">Multiprovider Support</h3>
             
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
              <img src={val.img} alt=""
              height="155px"
              width="55%"
              className="mt-4"
 />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slider;
