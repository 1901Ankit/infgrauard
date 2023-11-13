import React from "react";
import "./index.css";
import held from "../../assests/images/photo/GIF-BG-01-1024x1024 (1).png";
import Button from "../../components/button";
import Teamer from "../../components/teamer";
import Team from "../../components/team";
import aboutinf from "../../assests/video/Infraguard-About-Page-Final-1.mp4";
import Aos from "aos";


const About = () => {
  Aos.init({ able: "mobile" });
  let handleClick = () => {
    var elem = document.getElementById("multi");
    elem.scrollIntoView();}
    
  return (
    <div>
      <div className="about">
        <div className="overlay">
          <h2 className="animate__animated  animate__bounceInLeft maati">
            ABOUT US
          </h2>
        </div>
      </div>
      <div className="container py-4 my-4 ">
        <div className="row ">
          <div className="col-sm-6">
            <div className="">
              <h2 className="aboutinfra">ABOUT INFRAGUARD</h2>
              <h2 className="hel">
                We Help You Simplify Your Server Operations
              </h2>
              <p className="vision mt-4">
                Infraguard was founded with a vision to provide solution to
                end-to-end cloud and server management for your business and one
                can leave behind the age-old traditional way of migrating and
                managing public cloud ecosystem and can have a successful move
                towards one future cloud management through our platform. This
                is applicable and can easily be achieved for all types of
                business irrespective of their market size.
              </p>
              <p className="vision mt-3">
                In this highly changing techno world, Infraguard comes as
                saviour to manage and maintain portfolios on cloud and server
                for your growing businesses. Our platform enables to deploy,
                manage, monitor and control all applications across public
                clouds ensuring businesses can have agile, scalable and
                cost-effective services.
              </p>
              <p className="vision">
                In other words, InfraGuard helps you simplify your server
                operations. One can manage all their servers on our InfraGuard
                platform without worrying about the cloud server you are using.
                With InfraGuard, your business can have Multi-Cloud Management,
                Unified Server Management, Control Centre for Servers and
                Managed Services Automation. All technical complexities will be
                a matter of past.
              </p>

              <Button
               onClick={() => {
                handleClick();
              }}
                text="uppercase"
                padding="13px"
                width="40%"
                border="none"
                className="knowbutton mt-3"
                bb="none"
              >
                KNOW MORE
              </Button>
            </div>
          </div>
          <div className="col-sm-6 mt-5 py-3 px-3 clouds">
          <div className="container vdo">
              <video autoPlay playsInline loop muted width={"90%"}
               className="visa">
                <source src={aboutinf} />
              </video>
              <img src={held} className="held" />
            </div>
            
          </div>
        </div>
      </div>
      <Teamer />

      <div className="greys mt-5 py-5">
        <div className="container py-5">
          <div className="row ">
            <div className="col-sm-7 ">
              <div className="feat">
                <h3 className="with">INFRAGUARD ADVANTAGES</h3>
                <div className="">
                  <h3 className="brief">
                    Let us brief you about each functionality that InfraGuard
                    works upon.
                  </h3>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-5"></div> */}
          </div>

          <div className="container my-5" id="multi">
            <div className="row ">
              <div className="col-sm-6"
                 data-aos="fade-up"
                 data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top">
                <div className=" trio text-dark p-5">
                  <div className="imgs"></div>
                  <h3 className="lock mt-4">Multi-Cloud Management</h3>
                  <p className="autcat mt-4">
                    Infraguard provides a secure platform with set of tools and
                    procedures to manage, monitor and secure applications and
                    workloads on multiple clouds with multi-cloud, users achieve
                    agility and match each part of their business to specific
                    set up and execution terms.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 gap"
                 data-aos="fade-up"
                 data-aos-offset="20"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="true"
                 data-aos-anchor-placement="top">
                <div className=" trio text-dark p-5">
                  <div className="ims"></div>
                  <h3 className="lock mt-4">Unified Server Management</h3>
                  <p className="autcat mt-4">
                    A single architecture server that includes all common
                    functions that are installed and accessed for the data
                    management products Business will have centralized
                    cloud-based server, data management, MIS, easy maintenance,
                    common user interface, cost effective.
                  </p>
                </div>
              </div>
            </div>

            <div className="row  my-5">
              <div className="col-sm-6 ">
                <div className="trio text-dark p-5"
                   data-aos="fade-up"
                   data-aos-offset="20"
                   data-aos-delay="50"
                   data-aos-duration="1000"
                   data-aos-easing="ease-in-out"
                   data-aos-mirror="true"
                   data-aos-once="true"
                   data-aos-anchor-placement="top">
                  <div className="igs"></div>

                  <h3 className="lock mt-4">Control Centre for Servers</h3>
                  <p className="autcat mt-4">
                    A control centre server is a service that communicates with
                    network computers, returning status and relaying
                    instructions to the control centre application. Benefits
                    like reduced hardware and operating costs, unified
                    administrative tasks, centralised management.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 gap">
                <div className=" trio text-dark p-5"   data-aos="fade-up"
           data-aos-offset="20"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="true"
           data-aos-anchor-placement="top">
                  <div className="imt"></div>
                  <h3 className="lock mt-4">Managed Services Automation</h3>
                  <p className="autcat mt-4">
                    Infraguard will streamline and expedite your IT tasks
                    through automated processes. A business can have benefits
                    like process optimization, improved service quality, asset
                    and incident management, unified tasks, saves time and
                    reduces operational costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 my-4">
        <div className="row ">
          <div className="col-sm-12 text-center ourteam">OUR TEAM</div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center profes ">
            Meet our team of professionals
          </div>
        </div>

        <Team />
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <img src={clone} className="clone" />
          </div>
          <div className="col-sm-6 start px-4">
         
            <h2 className="rdy mt-5 p3-4">READY TO START?</h2>
            <p className="trial">Contact our team for demo and free trial.</p>
            <Link to={"/schedule"}>
            <Button
              bg="#ef687d"
              border="2px solid #ef687d"
              color="#ffffff"
              padding="8px"
              width="200px"
              className="button my-3"
            >
              SCHEDULE A DEMO
            </Button>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
