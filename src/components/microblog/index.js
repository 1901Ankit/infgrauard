import React from "react";
import Button from "../../components/button";
import clone from "../../assests/images/photo/footer-img-1.png";
import { Link } from "react-router-dom";
import axcess from "../../assests/images/photo/Axcess.jpg";
import saving from "../../assests/images/icons/1-Blazeclan-infographic-1.svg";
import API from "../../assests/images/icons/5-Kumolus-infographic-02.svg";
import window from "../../assests/images/photo/window-update-1.png";
import windw from "../../assests/images/photo/ig-policy-1.png";

const Microblogs = () => {
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
              <h3 className="let masa">
                Managing Microsoft Patches (Patch Tuesday/Update Tuesday)
              </h3>
              <h3 className="auotcat mt-4">
                Since 2003, it has been Microsoft’s tradition to release
                security updates on patch tuesday. It makes system admins easy
                to schedule testing and deployment. Let’s explore the whys,
                Hows, pros, cons of Patch Tuesday. We will also learn how
                InfraGuard can help you take advantage of Patch Tuesday while
                keeping you safe from Exploit Wednesday.
              </h3>
              <h2 className="rdy mt-4">WHAT IS MICROSOFT’S PATCH TUESDAY?</h2>
              <p className="auotcat mt-2">
                Patch Tuesday is an unofficial term for the day when Microsoft
                releases update packages for the Windows operating system and
                other Microsoft software applications. General practice at
                Microsoft is to gather security vulnerabilities and fixes and
                release them in bulk on Patch Tuesday. Microsoft used to publish
                advance notifications of security bulletins but stopped this
                practice in 2014.
              </p>
              <h2 className="rdy mt-3">WHEN IS PATCH TUESDAY?</h2>
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
          <div className="d-flex align-items-center justify-content-center mt-4">
            <img src={window} className="window" width={450} />
          </div>
        </div>

     <div className="row ">

          <div className="col-sm-12">
            <div className="">
             
            </div>
            <div className="col-sm-12">
              <h3 className="auotcat">
              Adoption by other companies:**
              </h3>
              <p className="auotcat">

SAP advises users to install security updates on “Security Patch Day” which coincide with Patch Tuesdays. Update from Adobe Systems scheduled for Flash Player also coincides with Patch Tuesday since November 2012. These are also done to avoid reverse engineering since these companies create applications which work on Microsoft Windows.
              </p>
            </div>
     </div>
          </div>
        
        <div className="row py-3 my-3 ">
          <div className="col-sm-12">
            <div className="">
              <h3 className="rdy">CONS:</h3>
            </div>
            <div className="col-sm-12 mt-3">
              <p className="auotcat">
              Patch Tuesday was designed to simplify patch management but there are some cons to this approach. The number of patches released on that one day can sometime be overwhelming. If any of them cause system problems it is going to affect all the systems at same time. Also. if a large number of computers that are connected to the Internet all reboot within a certain period of time, this can also strain a network and lead to outages.
              </p>
             
              <p className="auotcat">
              On every Patch Tuesday previously undisclosed vulnerabilities are made public which help hackers to exploit those vulnerabilities. Many exploitation events are seen shortly after the release of a patch which coined the term “Exploit Wednesday”.
              </p>
            </div>

            <div className="d-flex align-items-center justify-content-center mt-4">
            <img src={windw} className="window" width={450} />
          </div>
          </div>

        </div>

        <div className="row ">
          <div className="col-sm-12">
            <h3 className="rdy mt-2 ">INFRAGUARD AT RESCUE:</h3>

            <h3 className="auotcat mt-3">
            With InfraGuard you can automate every step of patch management with selective installation on schedule. So, you can solve this problem by simply creating a policy on IG which updates on Tuesday. You get to choose your maintenance windows for the best time to install.
            </h3>
            <h3 className="auotcat mt-3">
            InfraGuard will also generate reports for available patches and send to stakeholders for approval so you stay in control and updated of what is happening in your servers. Simple auditing allow us to display downloadable patch installation history by applying appropriate filters
            </h3>
            <h3 className="auotcat mt-3">
            Conclusively you can automate your patch management as per your company policies while receiving detailed email reports after every scan or install. Filter and selectively install patches and manage Instance images of any cloud provider without leaving InfraGuard.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Microblogs;
