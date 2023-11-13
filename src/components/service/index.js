import React from "react";
import Button from "../../components/button";
import clone from "../../assests/images/photo/footer-img-1.png";
import { Link } from "react-router-dom";
import axcess from "../../assests/images/photo/Axcess.jpg";
import saving from "../../assests/images/icons/1-Blazeclan-infographic-1.svg";
import API from "../../assests/images/icons/5-Kumolus-infographic-02.svg";
import cyber from "../../assests/images/photo/patch-blog-graph.png";
import windws from "../../assests/images/photo/patch-blog.jpg";

const Service = () => {
  return (
    <>
      <div className="contact">
        <div className="overlay">
          <h2 className="animate__animated animate__rotateInUpRight maati">
            BLOG
          </h2>
        </div>
      </div>

      <div className="container">
        <div className="row py-5 my-3 ">
          <div className="col-sm-12">
            <div className="">
              <h3 className="lets">
              How often should patch management be performed?
              </h3>
              <h3 className="auotcat mt-4">
              A patch is a small fix to an existing piece of software, usually used to fix bugs or security vulnerabilities. Patch Management is the process of handling all the patches of components within the company’s information system. It means that someone is doing just that – managing these patches.
              </h3>
              <h2 className="with mt-4">WHAT IS MICROSOFT’S PATCH TUESDAY?</h2>
              <p className="auotcat mt-2">
              Patch Management is most likely ignored among the security topics, but it is an important component of any security plan. Who can forget the ransomware attack WannaCry that infected hundreds of computers all over the world. One of the biggest reasons for the vulnerability was unpatched Windows machines.
              </p>
              <p className="auotcat mt-2">
                Patch Tuesday is on the second Tuesday of each month in North
                America. The updates arrive around 10 a.m. PST. Sometime they
                may be released later in the day. Also, the fourth Tuesday of
                each month is reserved for updates that aren’t related to
                security often called “D” updates. At Microsoft Patch Tuesday
                updates are called “B” updates. Microsoft also issues optional
                update packages in the third(“C” updates) or fourth(“D updates”)
                weeks of the month.
              </p>
            </div>
          </div>
              <h2 className="with mt-3">HERE ARE SOME MORE:</h2>
          <div className="d-flex align-items-center justify-content-center mt-4">
            
            <img src={windws} className="window" width={450} />
          </div>
        </div>

     
          <div className="col-sm-12">
            <div className="">
             
            </div>
<div className="row ">
            <div className="col-sm-12">
              <h3 className="auotcat">
              Source: testpreptraining.com
              </h3>
              <p className="auotcat">

              As IT infrastructure started moving to cloud, the risk of company’s infrastructure getting affected also went up. Thousands of patches are released everyday. But having a fix available and never applying it won’t help you. You need to implement patch management best practices and apply them to the right applications at the right time.
              </p>
            </div>
            </div>
          </div>
        
        <div className="row py-3 my-3 ">
          <div className="col-sm-12">
            <div className="">
              <h3 className="with">HERE IS THE NUMBER OF OPEN SOURCE VULNERABILITIES BY YEAR:</h3>
            </div>

            <div className="d-flex align-items-center justify-content-center mt-5">
            <img src={cyber} className="window" width={450} />
          </div>
          </div>

        </div>

        <div className="row  ">
          <div className="col-sm-12">
            <h3 className="auotcat mt-2 ">Now, the question is how often?</h3>

            <h3 className="auotcat mt-3">
            If you don’t use an automated patch management solution like InfraGuard, the answer is rather complicated. Your response depends upon your organisation’s risk appetite, your organization’s compliance obligations as well as the vendor recommendations, systems resilience and/or notification period of outage to your customers, as well as availability of staff with appropriate skills to perform the patch and of course you need to test the patch first.
            </h3>
            <h3 className="auotcat ">
            If you use an automated solution like InfraGuard here are some guidelines which makes it easier to create policies:
            </h3>
            <h3 className="auotcat ">
           1. You must apply security patches in a timely manner. The time frame varies depending on system criticality, level of data being processed, vulnerability criticality, etc.
            </h3>
            <h3 className="auotcat">
           2. Security patches must be installed “immediately” using automated patching methods
            </h3>
            <h3 className="auotcat ">
           3.Antivirus updates and scans must be run at least weekly
            </h3>
            <h3 className="auotcat ">
           4. Other patches must be applied quarterly in accordance with the patch release cycle
            </h3>
            <h3 className="auotcat ">
           5. If it is a Microsoft environment, then you would benefit most by installing patches monthly, scheduling this just after Patch Tuesday each month.
            </h3>
            <p className="auotcat">Apart from this patching it is best to run scheduled monthly vulnerability scans. Utilize InfraGuard’s vulnerability scanner by creating policies and scanning for vulnerability in your cloud, on-premises, and/or hybrid environment.</p>
            <p className="auotcat">Once policies are in place it takes two clicks to Implement those policies via InfraGuard.</p>
            <p className="auotcat">Contact us for a demo today.</p>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
