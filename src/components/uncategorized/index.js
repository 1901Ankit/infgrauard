import React from "react";
import mic from "../../assests/images/photo/Microsoft-Patches-1024x683.jpg";
import ser from "../../assests/images/photo/Patch-Management-1024x683.jpg";
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";

const Uncategorized = () => {
  const navigate = useNavigate();

  const SignFeature = () => {
    navigate("/signfeature");
  };
  return (
    <>
      <div className="schedule">
        <div className="overlay">
          <h2 className="animate__animated animate__rotateInUpRight maati">
            Uncategorized
          </h2>
        </div>
      </div>
      <div className="container mt-5 py-3">
        <div className="row ">
          <div className="col-sm-12">
            <h2 className="lets">Category: Uncategorized</h2>

            <h2 className="let mt-4 signtags">
              Significant Features of Electronic Deal Tools
            </h2>
            <p className="second mt-4">
              Using virtual deal tools helps establishments streamline the
              agreement obama administration process. This is especially
              beneficial for mergers and acquisitions. It also allows businesses
              to measure data for making informed business decisions. These
              tools can be employed by a wide array of businesses, including
              private equity finance, law firms, and investment banking. Some of
              the...
            </p>
            <a href="signfeature">
              <button className="butn">View More</button>
            </a>

          </div>

          <h2 className="let mt-5 signtags mt-5">Dentistas En This town</h2>

          <p className="second mt-3">
            Located in Madrid’s center, the dental hospital of Clinica Tooth
            Velazquez presents a wide range of dental services. The staff with
            this practice uses the latest technology and the top quality
            materials to have the patient the best dental care. Additionally, it
            offers free of charge diagnostics and treatment strategies. The
            medical clinic offers a...
          </p>
          <a href="dentistas">
            <button className="butn">View More</button>
          </a>

          <h2 className="let mt-5 signtags">
            How Data Supervision Tools Can Help Your Business
          </h2>

          <p className="second mt-3">
            Managing info is a vital part of operating a business. Devoid of it,
            you may end up with shut off strategy, disappointed employees, and
            unrealistic desired goals. Luckily, there are several data control
            tools ideal help you transform your life business. They can help you
            uncover key information, make smarter decisions, and grow your
            organization....
          </p>
          <a href="Supervisn">
            <button className="butn">View More</button>
          </a>

        
          <div className="container">

          
           <div className="row ">
          <div
            className="col-sm-6 mt-5 "
           
          >
            <img src={mic} width="100%" className=" " />
          </div>

          <div className="col-sm-6  mt-5 ">
            <div className="">
            

              <div className="">
                <h3
                  className="let mt-5 signtags "
               
                >
                
            Managing Microsoft Patches (Patch Tuesday/Update Tuesday)
          
                </h3>
                <div className="mt-4">
                  <p
                    className="second mt-3"
                   
                  >
                 
            Blog Managing Microsoft Patches (Patch Tuesday/Update Tuesday) Since
            2003, it has been Microsoft’s tradition to release security updates
            on patch tuesday. It makes system admins easy to schedule testing
            and deployment. Let’s explore the whys, Hows, pros, cons of Patch
            Tuesday. We will also learn how InfraGuard can help you take
            advantage of Patch Tuesday...
         
                  </p>
          <a href="microblog" className="signtags">
            <button className="butn mt-3 sau">View More</button>
          </a> 
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

      
             <div className="row ">
          <div
            className="col-sm-6 mt-5 "
           
          >
            <img src={ser} width="100%" className=" " />
          </div>

          <div className="col-sm-6  mt-5 ">
            <div className="">
            

              <div className="">
                <h3
                  className="let mt-5 signtags "
                
                >
                
                How often should patch management be performed?
          
                </h3>
                <div className="mt-4">
                  <p
                    className="second mt-3"
                    
                  >
                 
                 
            Blog How often should patch management be performed? A patch is a
            small fix to an existing piece of software, usually used to fix bugs
            or security vulnerabilities. Patch Management is the process of
            handling all the patches of components within the company’s
            information system. It means that someone is doing just that –
            managing...
          </p>
          <a href="service">
            <button className="butn mt-3">View More</button>
          </a> 
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Uncategorized;
