import React from "react";
import "./index.css";
import unified from "../../assests/images/photo/InfraGuard-Way-of-Managed-Services.jpg";
import IG from "../../assests/images/photo/IG-Patch-Management-Flyer.jpg";
import faster from "../../assests/images/photo/WA-Solution-Architect-1.jpg";
import scale from "../../assests/images/photo/WA-Consulting-Partners-1.jpg";
import uni from "../../assests/images/photo/InfraGuard-Whitepaper-2021-2.jpg";
import Button from "../../components/button";
import pdf from "../../assests/Pdf/pdf1.pdf";
import pdf2 from "../../assests/Pdf/pdf2.pdf";
import pdf3 from "../../assests/Pdf/pdf3.pdf";
import pdf4 from "../../assests/Pdf/pdf4.pdf";
import pdf5 from "../../assests/Pdf/pdf5.pdf";
import Aos from "aos";


const Resource = () => {
  Aos.init({ able: "mobile" });
  return (
    <>
       <div className="contact">
        <div className="overlay">
          <h2 className="animate__animated animate__rotateInUpRight maati">
            RESOURCES
          </h2>
        </div>
      </div>

      <div className="container py-5 mt-4">
        <div className="row ">
          <div className="col-sm-6">
            <h3 className="rdy">TECHNICAL RESOURCES</h3>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-6">
            <h3 className="lets mt-2"
               data-aos="fade-right"
               data-aos-offset="20"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
              data-aos-once="true"
               data-aos-anchor-placement="top">Resources to help you get going.</h3>
          </div>
        </div>
      </div>

      <div className="container mt-3 ">
        <div className="row ">
          <div className="col-sm-3 hehe"
             data-aos="fade-up"
             data-aos-offset="20"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
            data-aos-once="true"
             data-aos-anchor-placement="top">
            <img src={unified}  width="100%" height={160} className="shadow mnged" />
            <div className="mt-4">
              <h3 className="let crck">InfraGuard Way of Managed Services</h3>
              <p className="propara mt-2 crck"
            >
                Secure scalable solution to supercharge your managed services
                operations.
              </p>
              <a
                className="button p-2 text-decoration-none px-3 "
                href={pdf}
                target="_blank"
              >
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-sm-3"
           data-aos="fade-up"
           data-aos-offset="20"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
          data-aos-once="true"
           data-aos-anchor-placement="top">
            <img src={IG} 
            width="100%"
            height={160}className="shadow med" />
            <div className="mt-4">
              <h3 className="let crck">IG-Patch Management</h3>
              <p className="propara mt-2 crck">
                InfraGuard's platform simplifies patch management, user access,
                and server maintenance for cloud or on-premise servers.
              </p>
           

              <a
                className="button p-2 text-decoration-none px-3 "
                href={pdf2}
                target="_blank"
                >
                READ MORE
              </a>
            
            </div>
          </div>
          <div className="col-sm-3 whits"
           data-aos="fade-up"
           data-aos-offset="20"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
          data-aos-once="true"
           data-aos-anchor-placement="top">
            <img src={uni}   width="100%" height={190} className="shadow mnged" />
            <div className="mt-4">
              <h3 className="let crck">InfraGuard Whitepaper 2021</h3>
              <p className="propara mt-3 crck">
                Patch management access management I sop automation{" "}
              </p>
             <div className="mt-4"
             >

              <a
                className="button p-2 text-decoration-none px-3"
                href={pdf5}
                target="_blank"
                >
                READ MORE
              </a>
                </div>
            </div>
          </div>
          <div className="col-sm-3 solta"
           data-aos="fade-up"
           data-aos-offset="20"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
          data-aos-once="true"
           data-aos-anchor-placement="top">
            <img src={scale}  width="100%" height={160} className="shadow mnged" />
            <div className="mt-4">
              <h3 className="let crck">WA-Consulting Partners</h3>
              <p className="propara mt-4 crck">
                Scale up your well-architected reviews For consulting partners
              </p>
              

              <a
                className="button p-2 text-decoration-none px-3 "
                href={pdf4}
                target="_blank"
              >
                READ MORE
              </a>
           
          </div>
          </div>
        
          <div className="col-sm-3  solta"
           data-aos="fade-up"
           data-aos-offset="20"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
          data-aos-once="true"
           data-aos-anchor-placement="top">
            <img src={faster}  width="100%" height={160}className="shadow mnged" />
            <div className="mt-4">
              <h3 className="let crck">WA-Solution Architect</h3>
              <p className="propara mt-3 crck">
                Faster well-architected reviews
               
              </p>
            </div>
           
              <a
                className="button p-2 text-decoration-none px-3"
                href={pdf3}
                target="_blank"
              >
                READ MORE
              </a>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Resource;
