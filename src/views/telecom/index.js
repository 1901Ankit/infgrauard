import React from "react";
import "./index.css";
import Button from "../../components/button";
import clone from "../../assests/images/photo/footer-img-1.png";

const Telecommunication = () => {
  return (
    <>
      <div className="contact">
        <div className="overlay">
          <h2 className="animate__animated animate__rotateInUpRight maati finch">
            Telecommunication
          </h2>
        </div>
      </div>
      <div className="container mt-5 pt-2">
        <div className="row">
          <div className="col-sm-3 mt-5">
            <div
              className="contactus_parallax2 shadow p-0 "
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
          </div>

          <div className="col-sm-9 mt-5">
            <div className="px-5 featt">
              <h2 className="rdy toge">WHY PARTNER WITH INFRAGUARD?</h2>
              <div className="">
                <h3 className="toge mt-4">
                Build and honour your customer's trust with Infraguard
                </h3>
                <div className="mt-4">
                  <p className="bank">
                  Telecom sector can keep businesses, customers and consumers safe and connected by modernising vulnerability management and access management. This sector like the Banking sector also holds enormous data of customers and to keep them safe by streamlining the risk and vulnerabilities is essential. To maximise the speed and quality of its response to threatening vulnerabilities, Telecom sector needs to improve the visibility of IT systems.
                  </p>
                  <p className="bank">
                  Infraguard is able to provide solutions to Telecom sector where the infrastructure is large, which includes various cloud-servers, different operating systems, network infrastructure and applications, each of these have different methods and tools for assessing vulnerabilities. As a part of our client’s requirements next generation cyber security patches roll-out, improving identification and remediations of vulnerabilities and bugs and these became a priority for our client for maximizing uptime and preventing data breach.
                  </p>
                  <p className="bank">
                  Infraguard created patch policies for the client by building Center of Excellence (CoE) basis their business needs. These actions were divided into regular scans and patch install actions. Multiple servers were scanned on weekly basis, covering a wide variety of operating systems and their builds. The client was able to push the output into its governance, risk management and compliance solution, which act as a single point of security reporting.
                  </p>
                  <p className="bank">
                  On timely basis, the client servers were scanned for pending updates and reports were added to the ticketing system. After client’s approval on set of patches, those patches were installed. Then Patch Updates happens at designated time and reports were again sent to the ticketing system. With regular patch management; Infraguard worked upon the access management of the client by implementing key rotation, SSH Access and Just-in-Time (JIT) functionalities for smooth accesses to the systems.
                  </p>
                  <p className="bank">
                  Our client chose us for identifying and prioritising vulnerabilities through patch management and access management. There was exceptional simplicity and speed in deployment and use with detailed report and unified cloud server management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </>
  );
};

export default Telecommunication;
