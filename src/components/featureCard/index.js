import React from "react";
import "./index.css";
import Button from "../button";
import boy from "../../assests/images/photo/footer-img-1.png";
import { NavLink, useNavigate } from "react-router-dom";
import Aos from "aos";
import sphere from "../../assests/images/photo/image-section.png";

const FeatureCard = (props) => {
  Aos.init({ able: "mobile" });
  let navigate = useNavigate();
  let handleClick = (val) => {
    navigate(val);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="hshaa mt-5">
        
        <div className="container">
          
        <div className="pinner">
                  <div className="log">
                    <div></div>
                    <div></div>
                  </div>
                </div>
          <div className="revrse">
            
          
            <div
              className="col-sm-5"
              data-aos="fade-right"
              ddata-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <img src={boy} className="boy boys" />
            </div>
          
            <div className="col-sm-6 start px-4">
              <h2 className="rdy mt-5 p3-4">READY TO START?</h2>
              <p className="brief cnct">Contact our team for demo and free trial.</p>

              <Button
                onClick={() => {
                  handleClick("/schedule");
                }}
                bg="#ef687d"
                border="2px solid #ef687d"
                color="#ffffff"
                padding="18px"
                width="250px"
                className="button my-3"
              >
                SCHEDULE A DEMO
              </Button>
              {/* </Link> */}
              
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
