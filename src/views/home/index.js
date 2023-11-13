import React from "react";
import banners from "../../assests/images/photo/Banner-GIF-2-1-1-min.gif";
import "./index.css";
import Button from "../../components/button";
import video from "../../assests/video/Patch-management.mp4";
import videos from "../../assests/video/Access.mp4";
import vide from "../../assests/video/Automated.mp4";
import circle from "../../assests/images/photo/GIF-BG-06-768x612.png";
import cile from "../../assests/images/photo/GIF-BG-07-768x612.png";
import isms from "../../assests/images/photo/tops.jpg";
import web from "../../assests/images/photo/Web-Page-52-min-1.jpg";
import Subscribe from "../../components/subscribe";
import Family from "../../components/family";
import Multic from "../../components/multic";
import { Link } from "react-router-dom";
import Aos from "aos";
import Multicarousel from "../../components/testimonial";
import sphere from "../../assests/images/photo/image-section.png";

const Home = () => {
  Aos.init({ able: "mobile" });
  let handleClick = () => {
    var elem = document.getElementById("ourfeature");
    elem.scrollIntoView();
  };
  return (
    <div>
      <div className="baner">
     
        <div className="container">
          <div className=" revrse ">
            <div
              className="
               startt"
            >
              <Family />
              <div className="row cloudup">
                <h6
                  className="col-sm-10 guard
                  animate__animated  animate__fadeIn  animate__delay-1s"
                >
                  Infraguard makes cloud and server management a breeze and
                  provides freedom from all technical complexities.{" "}
                </h6>
                <div
                  className="col-sm-2  sphere"
                  data-aos="fade-right"
                  data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  <img src={sphere} height={"60px"} />
                </div>
              </div>
            
              <div
                className="d-flex animate__animated  animate__fadeIn  animate__delay-1s   mt-3"
             
              >
                <Link to={"/schedule"}>
                  <Button
                    bg="#ef687d"
                    border="2px solid #ef687d"
                    color="#ffffff"
                    padding="8px"
                    width="150px"
                    className="buttondemo my-4"
                  >
                    GET DEMO
                  </Button>
                </Link>
             
                <Button
                  onClick={() => {
                    handleClick();
                  }}
                  bg="#ff9900"
                  border="2px solid #ff9900"
                  color="#ffffff"
                  padding="8px"
                  width="150px"
                  className="demobutton my-4 mx-3 "
                >
                  KNOW MORE
                </Button>
           
                <div className="spinner">
                  <div className="loding">
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ms-5 mt-5">
              <div className="row align-items-center">
               

                <div className="col-sm-8 mt-5 ">
                  <div class="elementor ">
                    <img
                      src={banners}
                      width={"130%"}
                      className="clockimg"
                      data-aos="fade-left"
                      data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </div>
                </div>
                <div
                  className="col-sm-2 mt-5 sphers"
                  data-aos="fade-right"
                  data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"                >
                  <img src={sphere} 
                  height={"50px"}
                   />
                </div>
              </div>
            </div>
          </div>

   
        </div>

        <div className="rest">
          <div className="rounf">
            <div className="rounf1"></div>
            <div className="rounf2"></div>
            <div className="rounf3"></div>
          </div>
        </div>
      </div>

      <div className="container  my-5 " id="ourfeature">
        <div className="row">
          <div
            className="col-sm-6 
        feat"
          >
            <h3
              className="ftrs"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              OUR FEATURES
            </h3>
            <h4
              className="boote mt-3"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              With Infraguard, you can scale and build powerful Managed Service
              operations with enhanced cloud security
            </h4>
            <p
              className="involve my-3 "
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              With evolving technology, businesses face the challenges of
              managing multiple servers and hybrid infrastructure, which involve
              repetitive tasks. Infraguard brings in central automation that can
              manage servers and VMs without any manual intervention. From
              Access to Security, you get it all in one dashboard.
            </p>
         
            <img src={isms} 
             width={"100%"}className="isms" />
            <Multic />
          </div>
          <div className="col-sm-6 ourweb">
     
            <div
              className="kite p-5"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <h2 className="text-white let managet">
                Why Unified Cloud Server management is a game changer?
              </h2>
              <p className="small text-white mt-3 gcp">
                A small team can manage AWS, Azure, GCP and On-Prem servers from
                a single dashboard with automated Access, Patching and Execution
                Actions. Scalability is unlimited with future-ready security!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 py-5">
        <div className="row ">
          <div
            className="col-sm-6 "
            data-aos="fade-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <h3 className="wtth">PROBLEM STATEMENT</h3>
            <h2 className="boote mt-3">
              Bottleneck in Cloud and Server Management
            </h2>
            <p className="mt-4 cat">
              The threats, complexities and challenges of large-scale hybrid
              server management are insurmountable with current solutions.
            </p>
          </div>
          <div
            className="col-sm-6"
            data-aos="fade-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <img src={web} 
              width={"100%"}
            className="web"/>
          </div>
        </div>
      </div>

      <div className="container bg-grey mt-5">
        <div className="row hpey ">
          <div
            className="col-sm-4 my-2"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <div className="tradi">
              <h3 className="lack text-white">Lack of Patch Management</h3>
              <p className="lacktrad text-white ">
                Traditional patch management is an effort-intensive,
                time-consuming task that is prone to failure. Despite
                enterprises knowing the security threats, the patches are not
                installed on time. Current solutions are simply too complex!
              </p>
            </div>
          </div>
          <div
            className="col-sm-4 my-2 "
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <div className="hybrid shadow">
              <h3 className="central">No Central Governance</h3>
              <p className="lacktrd">
                Most large infrastructures are being managed with ad-hoc
                actions, from access to execution. Any governance policies, if
                created, are only on paper.
              </p>
            </div>
          </div>
          <div
            className="col-sm-4 my-2"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <div className=" tradi  ">
              <h3 className="lack text-white">Manual SOPs</h3>
              <p className="lacktrad text-white ">
                How often do we see even critical business processes put at risk
                due to manual processes? Add in multiple teams, environments,
                and business objectives, and you get a recipe for disaster.
                Enterprises are putting their cloud environments at risk when
                relying on manual SOPs.
              </p>
            </div>
          </div>
        </div>

        <div className="row my-3 ">
          <div
            className="col-sm-4 feat my-2 "
            data-aos="fade-down"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <div className="hybrid shadow">
              <h3 className="central">Access Threats</h3>
              <p className="lacktrd  ">
                Compromised or stolen access credentials are one of the biggest
                threat vectors, yet companies still share their SSH keys, have
                live keys lying around, and have no audit mechanism in place.
                Without enforced compliance, this can lead to a huge
                cyberattack.
              </p>
            </div>
          </div>
          <div
            className="col-sm-4 my-2 "
            data-aos="fade-down"
            data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
          >
            <div className=" trad ">
              <h3 className="lack text-white">Skill Gap</h3>
              <p className="lacktrad text-white">
                AWS, GCP or Azure - each console needs a specially trained team.
                And you have to continuously upskill them as the technology
                evolves. This costly, time consuming and vulnerable to market
                conditions.
              </p>
            </div>
          </div>
          <div
            className="col-sm-4 my-2 "
            data-aos="fade-down"
            data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
          >
            <div className="hybrid shadow">
              <h3 className="central">
                Scalability Issues for Hybrid Workloads
              </h3>
              <p className="lacktrd mt-5 ">
                If your systems are manual-intensive, you will always be faced
                with the challenges of scalability. For every new workload, you
                have to increase the manpower. This rapidly becomes
                unsustainable!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Subscribe />

      <div className="container py-5">
        <div className="row">
          <div
            className="col-sm-6"
            data-aos="fade-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <div className="">
              <h2 className="with">USE CASES</h2>
              <h2 className="lets mt-3 ptache">PATCH MANAGEMENT</h2>
              <p className="mt-3 brings">
                InfraGuard’s Automated Patch Management brings to you the power
                of On-Demand and On-Schedule Patching from a super-customisable
                dashboard.
              </p>
              <p className="brings">
                The Patching Centre of Excellence is Cloud & Operating System
                Agnostic. This means that central governance policies, once
                created, can be applied uniformly across any workload.
              </p>
              <h3 className="let htch mt-4">Patching Centre of Excellence</h3>
              <p className="proc">
                A simple 3-Step process ensures that your servers always stay
                updated and secure.
              </p>

              <p className="define">
                <b>Define:</b>
                <span className="brings">
                  The optimum Patching Schedules, Rules, Associated Actions and
                  Stakeholders are defined for each workload. This takes into
                  account the criticality and environments of server groups.
                  &nbsp;
                </span>
              </p>
              <p className="define">
                <b>Enforce:</b>
                <span className="brings">
                  The policies created above are attached to server groups
                  across providers, regions and OS. The maintenance window times
                  are approved and enforced. &nbsp;
                </span>
              </p>
              <p className="define">
                <b>Manage:</b>
                <span className="brings">
                  With a live dashboard, easy-to-read reports and forever-logs,
                  your team manages these policies, scopes out improvements and
                  goes back to Step 1, for a complete feedback loop.&nbsp;
                </span>
              </p>
            </div>
          </div>
          <div className="col-sm-6 mt-5">
            <div className="container vdo ">
              <video autoPlay playsInline loop muted width={"90%"}>
                <source src={video} className="" />
              </video>
              <img
                src={circle}
               
                className="cirlle"
             
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div
            className="col-sm-4 feat "
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            
            <div className="prd bg-white p-4 m-4">
              <p className="let ptch">On- Schedule Patching</p>
              <p className="mt-4 onpatch">
                Infraguard allows you to implement patches as per policies on a
                scheduled time. If you want to perform a one-time scan or
                install to fix an issue, you can use the Infraguard dashboard.
              </p>
            </div>
          </div>
          <div
            className="col-sm-4"
            data-aos="fade-down"
            data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
          >
         
         <div className="prd bg-white px-4 p-4 m-4">
              <h3 className="let ptch">On- Demand Patching</h3>
              <p className="mt-4 onpatch">
                Do you want to install critical patches (alerted by the
                InfraGuard dashboard) immediately? Or do you want to select a
                group of servers and scan them for updates?
              </p>
            </div>
          </div>
          <div
            className="col-sm-4"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
           
           <div className="prd bg-white px-4 p-4 m-4">
              <h3 className="let ptch">API Integrations</h3>
              <p className="mt-4 onpatch">
                InfraGuard’s open API allows you to create custom workflows by
                integrating ticketing, monitoring and alerting systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5 mt-5">
        <div className="row">
          <div className="col-sm-6 mt-5">
            <div className="container videsa vdo">
              <video autoPlay playsInline loop muted 
              width={"90%"}
              >
                <source src={videos} />
              </video>
              <img
                src={cile}
               
                className="cirle"
             
              />
            </div>
          </div>
          <div
            className="col-sm-6 "
            data-aos="fade-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <div className="">
              <h2 className="with">USE CASES</h2>
              <h2 className="lets mt-3 ">ACCESS MANAGEMENT</h2>
              <p className="mt-3 brings">
                Built ground-up keeping in mind the need of large enterprises
                and multi-client service providers, Infraguard’s Access
                Management is an all in one solution to create, enforce and
                audit your access policie
              </p>
              <p className="brings">
                From SSO to granular roles, everything you need for a secure
                infrastructure is in-built into our dashboard.
              </p>
              <h3 className="let htch">Access Centre of Excellence</h3>
              <p className=" mt-3 proc">
                The 3-Step process to manage, secure and audit your
                infrastructure.
              </p>

              <p className="define">
                <b>Define:</b>
                <span className="brings">
                  The optimum Patching Schedules, Rules, Associated Actions and
                  Stakeholders are defined for each workload. This takes into
                  account the criticality and environments of server
                  groups.&nbsp;
                </span>
              </p>
              <p className="define">
                <b>Enforce:</b>
                <span className="brings">
                  Attach your key-rotation policies with server groups and
                  enforce a schedule based on the above phase. This will ensure
                  that no live key is lying around. Also, implement the
                  requesters and approvers for any ad-hoc key creation.&nbsp;
                </span>
              </p>
              <p className="define">
                <b>Manage:</b>
                <span className="brings">
                  Audit the age of keys, last actions and MFA implementation
                  from a single dashboard. Implement changes to keep improving
                  your server security.&nbsp;
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div
            className="col-sm-4"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
          <div className="prd bg-white px-4 p-4 m-4">
              <h3 className="let ptch">Ticket & Time-Based Access</h3>
              <p className="mt-4 onpatch">
                Secure restricted servers by ensuring Access are only obtained
                through keys that are tied to work tickets, and have a short
                lifetime with auto-expiry. Never have an unneeded access key
                lying around!
              </p>
            </div>
          </div>
          <div
            className="col-sm-4"
            data-aos="fade-down"
            data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
          >
       
       <div className="prd bg-white px-4 p-4 m-4">
              <h3 className="let ptch">Auto-Key Rotations</h3>
              <p className="mt-4 onpatch">
                Create policies that will manage and rotate your access keys in
                a scheduled manner as per central compliance policy and can
                share the new access keys to the users.
              </p>
            </div>
          </div>
          <div
            className="col-sm-4"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
                <div className="prd bg-white px-4 p-4 m-4">
              <h3 className="let ptch">Embedded SSH Terminal</h3>
              <p className="mt-4 onpatch">
                You can connect to the SSH Terminal of servers within the
                Infraguard dashboard and access them. SSH Terminal will be
                secure and compliant as per central compliance policy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5 mt-5">
        <div className="row">
          <div
            className="col-sm-6"
            data-aos="fade-right"
            data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
          >
            <h2 className="with">USE CASES</h2>
            <h2 className="lets">SOP AUTOMATION</h2>
            <p className="mt-3 brings">
              SOP Automation helps with centralized repository of all SOPs,
              which are managed and automated based on set of policy or rules.
              With this in place, one can access the active workflow with an
              ease.
            </p>
            <p className="mt-4 brings">
              Standardizing processes and integrating them into daily workflow
              will create a safer workplace and help in avoiding fines and
              penalties by staying in compliance with required standards and
              regulations. Infraguard make it easy to provide evidence of
              compliance by producing records of how team members follow
              policies and procedures.
            </p>
          </div>

          <div className="col-sm-6 px-5">
            <div className="container vdo">
              <video autoPlay playsInline loop muted width={"90%"}>
                <source src={vide} />
              </video>
              <img
                src={circle}
                
                className="cire"
           
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div
            className="col-sm-4"
            data-aos="fade-up"
            data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
          >
             <div className="prd bg-white px-4 p-4 m-4">
              <h3 className="let ptch">Manage different servers with Automation</h3>
              <p className="mt-4 onpatch">
                Infraguard can manage your different servers with just a click.
                With policies, you can manage and automate your multiple
                servers.
              </p>
            </div>
          </div>
          <div
            className="col-sm-4"
            data-aos="fade-down"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <div className="prd bg-white px-4 p-4 m-4">
              <h3 className="let ptch">Manage repeatable tasks</h3>
              <p className="mt-4 onpatch">
                Common/repeatable tasks such as Cache clear, logs clear that are
                done daily for APACHE, TOMCAT, MySQL can be managed through SOP
                Automation from Infraguard Dashboard.
              </p>
            </div>
          </div>
          <div
            className="col-sm-4"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
           <div className="prd bg-white px-4 p-4 m-4">
              <h3 className="let ptch">Manage Multiple Clients with Automation</h3>
              <p className="mt-4 onpatch">
                With Infraguard’s client-specific flows, you can create custom
                processes and automation for each client while keeping the
                policies separate and manageable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="tet mt-5">
        <div className="container">
          <div className="row ">
            <div
              className="col-sm-12 mt-5"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <h3 className="with text-center mt-2 ">TESTIMONIALS</h3>
              <p className="mt-2  text-white text-center clientf ">
                What Clients Say About Infraguard
              </p>
            </div>
            <Multicarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
