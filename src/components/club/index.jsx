import React from "react";
import Carousel from "react-multi-carousel";
import "./index.css";
import image1 from "../../assests/images/photo/John-Du-Bois-150x150-1.jpg";
import image2 from "../../assests/images/photo/Prashant-Gyan-1.jpg";
import image3 from "../../assests/images/photo/Deepak-Sharma.jpg";
import image4 from "../../assests/images/photo/Shweta-Mishra-1.jpg";
import image5 from "../../assests/images/photo/Amit-Kumar.jpg";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

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
    <Carousel
      responsive={responsive}
      arrows={false}
      showDots={false}
      autoPlay={true}
      autoPlaySpeed={2000}
      infinite={true}
    >
  

      <div className=" members mt-5 py-3">
        <div>
          <img src={image1} className="image" />
        </div>
        <h3 className="subhead text-center mt-3">John Du Bois</h3>
        <h2 className="headsub text-center mt-3">Co-Founder & Advisor</h2>
        <p className="para mt-3 p-2">
          A Global-minded senior executive leader in High Technology companies;
          directing and building businesses for global companies. A Passionate
          leader who believes in helping companies and people develop and grow.
          Experienced in P/L and high impact revenue driving leadership
          positions, including restructures, capital raising and investment.
        </p>
        <div className="d-flex">
          <div className="social_icon pointer ms-5">
            <FaFacebook color="#ff687d" size={25}  className="ms-5"/>
          </div>

          <div className="social_icon pointer ms-3">
            {" "}
            <AiOutlineTwitter color="#ff687d" size={25} />
          </div>

          <div className="social_icon pointer ms-3 ">
            <AiFillLinkedin color="#ff687d" size={25} />
          </div>
        </div>
      </div>
      <div className=" members mt-5 py-3">
        <div>
          <img src={image2} className="image" />
        </div>
        <h3 className="subhead text-center mt-3">PRASHANT GYAN</h3>
        <h2 className="headsub text-center mt-3">Founder & CEO</h2>
        <p className="para mt-3 p-2">
          An accomplished entrepreneur with a demonstrated and vast work
          experience in IT and services industry. With expertise in Python, SQL,
          Web Applications, Business Development and Agile Methodologies.
          Dedicatedly focusing on challenges and solutions for server,
          compliance and automation management in various sectors for last 14
          years.
        </p>
        <div className="d-flex ">
        <div className="social_icon pointer ms-5">
            <FaFacebook color="#ff687d" size={25}  className="ms-5"/>
          </div>

          <div className="social_icon pointer ms-3">
            {" "}
            <AiOutlineTwitter color="#ff687d" size={25} />
          </div>

          <div className="social_icon pointer ms-3 ">
            <AiFillLinkedin color="#ff687d" size={25} />
          </div>
        </div>
      </div>
      <div className=" members mt-5 py-3">
        <div>
          <img src={image3} className="image" />
        </div>
        <h3 className="subhead text-center mt-3">DEEPAK SHARMA</h3>
        <h2 className="headsub text-center mt-3">Founder & CEO</h2>
        <p className="para mt-3 p-2">
          Successful Innovator and entrepreneur with 29 years of experience in
          business leadership. Experienced in all aspects of business formation,
          operation, finance and management in sectors such as SaaS, Server and
          Cloud Management, Education, Marketing. A visionary product developer
          with deep education in research and analytics.
        </p>
        <div className="d-flex ">
        <div className="social_icon pointer ms-5">
            <FaFacebook color="#ff687d" size={25}  className="ms-5"/>
          </div>

          <div className="social_icon pointer ms-3">
            {" "}
            <AiOutlineTwitter color="#ff687d" size={25} />
          </div>

          <div className="social_icon pointer ms-3 ">
            <AiFillLinkedin color="#ff687d" size={25} />
          </div>
        </div>
      </div>
      <div className=" members mt-5 py-3">
        <div>
          <img src={image4} className="image" />
        </div>
        <h3 className="subhead text-center mt-3">SHWETA MISHRA</h3>
        <h2 className="headsub text-center mt-3">Founder & CFO</h2>
        <p className="para mt-3 p-2">
          Innovative and performance driven entrepreneur with deep passion for
          technology and business. As a founder and investor of Infraguard, she
          is managing all aspects of finance and compliances for Infraguard.
          With excellent leadership skills, she is handling budget allocation,
          utilization matrix, and other critical business decisions.
        </p>
        <div className="d-flex ">
        <div className="social_icon pointer ms-5">
            <FaFacebook color="#ff687d" size={25}  className="ms-5"/>
          </div>

          <div className="social_icon pointer ms-3">
            {" "}
            <AiOutlineTwitter color="#ff687d" size={25} />
          </div>

          <div className="social_icon pointer ms-3 ">
            <AiFillLinkedin color="#ff687d" size={25} />
          </div>
        </div>
      </div>
      <div className=" members mt-5 py-3">
        <div>
          <img src={image5} className="image" />
        </div>
        <h3 className="subhead text-center mt-3">AMIT KUMAR</h3>
        <h2 className="headsub text-center mt-3">
          Co-Founder & Head of Marketing
        </h2>
        <p className="para mt-3 p-2">
          A successful and serial entrepreneur, who has pivoted in the Cloud and
          DevOps solutions for last 17+ years. He helped in building and shaping
          teams and solutions from ground level for various enterprises. As a
          Co-Founder and Head of Marketing of Infraguard, he manages the overall
          marketing strategies and decisions for Infraguard.
        </p>
        <div className="d-flex ">
        <div className="social_icon pointer ms-5">
            <FaFacebook color="#ff687d" size={25}  className="ms-5"/>
          </div>

          <div className="social_icon pointer ms-3">
            {" "}
            <AiOutlineTwitter color="#ff687d" size={25} />
          </div>
          <div className="social_icon pointer ms-3 ">
            <AiFillLinkedin color="#ff687d" size={25} />
          </div>
        </div>
      </div>

    </Carousel>
  );
};

export default Multicarousel;
