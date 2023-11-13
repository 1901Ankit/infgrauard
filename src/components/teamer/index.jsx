import React from "react";
import Carousel from "react-multi-carousel";
import image1 from "../../assests/images/icons/Web-Page-48-1-150x150.png";
import image3 from "../../assests/images/icons/Web-Page-20-3-150x150.png";
import image2 from "../../assests/images/icons/Web-Page-21-1-150x150.png";
import image4 from "../../assests/images/icons/Web-Page-22-1-150x150.png";
import image5 from "../../assests/images/icons/Web-Page-23-1-150x150.png";
import image6 from "../../assests/images/icons/Web-Page-24-150x150.png";
import image7 from "../../assests/images/icons/Web-Page-47-1-150x150.png";


const Multicarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
    {
      img: image6,
    },
    {
      img: image7,
    },
  
  ];
  return (
    <div className="">
      <div className="client_bg ">
        <div className="container logoclient mt-5">
          <div className="row mb-4  ">
            <div className="col-sm-12 mt-4">
              <h3 className="with ">OUR</h3>
              <h3 className="lets">Certifications</h3>
          
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
              height="130px"
              className="mt-2"
 />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Multicarousel;
