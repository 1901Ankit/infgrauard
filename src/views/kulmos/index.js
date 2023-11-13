import React from "react";
import "./index.css";

import kulmo from "../../assests/images/photo/Kumolus.jpg";

import API from "../../assests/images/icons/5-Kumolus-infographic-02.svg";

const Kulmos = () => {
  return (
    <>
      <div className="schedule">
        <div className="overlay">
          <h2 className="animate__animated animate__rotateInUpRight maati">
            KUMOLUS
          </h2>
        </div>
      </div>

      <div className="container">
      <div className="row py-
        4 my-3">
          <div className="col-sm-12">
            <div className="">
             
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-12">
            <div className="">
              <h3 className="with">WHY PARTNER WITH INFRAGUARD?</h3>
            </div>
            <div className="col-sm-11">
              <h3 className="blaze mt-4  acxs">
                Australia’s leading Cloud Management & Governance Solution
                integrates with Infraguard to enhance server management
                operations.
              </h3>
            </div>
          </div>
        </div>

        <div className="row mt-4 ">
          <div className="col-sm-5"
            data-aos="fade-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
           data-aos-once="true"
            data-aos-anchor-placement="top">
            
            <img src={kulmo} className="blazes" />
          </div>
          <div className="col-sm-7 px-4"
            data-aos="fade-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
           data-aos-once="true"
            data-aos-anchor-placement="top">
            <div className="">
              <h2 className="with smyt">SUMMARY:</h2>
              <p className="secons mt-2">
                Kumolus provides full-stack Enterprise Cloud Management
                including visualization, provisioning, workflow automation and
                cost management. The solution provides Real, measurable and
                policy-driven outcomes for IT, Security, Finance and Operations
                teams.
              </p>
              <p className="secons mt-2">
                The complimentary counterpart to their software needed to be a
                solution that could perform the same management, execution and
                automation at the server layer. Infraguard stepped in to fill
                that role. Kumolus had already worked with Infraguard in
                creating a white paper on the Well-Architected Framework in
                coordination with the AWS team in 2019 so they were well aware
                of the opportunities for synergy.
              </p>
            </div>
          </div>
        </div>

        <div className="row py-3 my-3 ">
          <div className="col-sm-12">
            <div className="">
              <h3 className="with">ABOUT KUMOLUS:</h3>
            </div>
            <div className="col-sm-11">
              <h3 className="second">
                Kumolus is an AWS Advanced Technology Partner with Cloud
                Management Tools Competency, SaaS partner as well as AWS
                Marketplace listing. Their enterprise cloud management platform
                provides Cloud Visualisation and Provisioning, Cost Management
                and Optimization, Compliance and Security and Event Scheduling
                and Workflow Automation.
              </h3>
            </div>
          </div>
        </div>
        <div className="row py-3 my-3 ">
          <div className="col-sm-12">
            <div className="">
              <h3 className="with">THE CHALLENGE:</h3>
            </div>
            <div className="col-sm-11">
              <p className="second">
                The comprehensive Cloud Management & optimization feature suite
                could benefit tremendously from a similar set of features on the
                Server layer. However, integrating with a separate provider
                would mean duplication of dashboards, onboarding & support
                issues, policy conflicts and customer approvals. In such a case,
                they wanted a solution that could be internally integrated via
                custom APIs so that it delivered the solution within the Kumolus
                workflow.
              </p>
              <h3 className="with mt-5">THE SOLUTION:</h3>
              <p className="second">
                Infraguard provides a full feature set of Open APIs. Further
                customizations were made to specifically serve the Patch
                Management use case.
              </p>
            </div>
          </div>
  <img src={API} 
            width="800" height="400" className="api" />
          </div>

        <div className="row ">
          <div className="col-sm-12 sops">
            <p className="second">
              In conjunction, Kumolus had a sophisticated event scheduler and
              opt-out workflows in their platform. The two teams coordinated in
              a joint-development effort to combine the best of what both
              platforms had to provide. Kumolus now offers a single-click Add-On
              for customers to do automated patch management. Customers will
              have fine-grained options to create backups, run post-install
              scripts, create patch exclusion lists, integrate with ticketing
              systems to manage patch approvals and further enhancements to keep
              their systems secure and updated.
            </p>
          </div>
          <div className="col-sm-12">
            <h3 className="with mt-5 ">BENEFITS:</h3>

            <h3 className="second">
              Integrating with Infraguard API means complete front-end
              flexibility to devise customer workflows. Clients will be able to
              seamlessly take advantage of sophisticated patch management
              without leaving the Kumolus dashboard. The patch management
              operations will be similar on both Windows and UNIX Operating
              Systems meaning that cost of training will be negligible and
              one-time on Kumolus side and consistent on the Client’s side.
            </h3>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Kulmos;
