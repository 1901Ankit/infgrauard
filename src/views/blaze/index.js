import React from "react";
import "./index.css";
import blaze from "../../assests/images/photo/Blazeclan.jpg";
import saving from "../../assests/images/icons/1-Blazeclan-infographic-1.svg";

const BLAZECLAN = () => {
  return (
    <>
      <div className="schedule">
        <div className="overlay">
          <h2 className="animate__animated animate__rotateInUpRight maati">
            BLAZECLAN
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
              <h3 className="blaze mt-4 acxs">
                How Blazeclan automated Patch Management with Infraguard and
                saved time by building a seamless cross-platform Patching
                workflow.
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
            <img src={blaze} className="blazes" />
          </div>
          <div className="col-sm-7 px-5"
            data-aos="fade-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top">
            <div className="">
              <h2 className="with smytt">SUMMARY:</h2>
              <p className="seconds mt-3">
                Blazeclan is a born-in-cloud, strategic partner of choice to
                organisations that want to deliver business excellence using the
                cloud as a tool. Its next-generation approach to Managed
                Services helps enterprises achieve consistent process
                adjustments & optimization in all business aspects. With this
                continuous optimization mindset and a rapidly growing Managed
                Services practice, the company was looking for a futuristic
                Patch Management solution. By using Infraguard’s policy-driven
                OS-agnostic approach, Blazeclan automated update management,
                centralized maintenance schedules & made Patching simple and
                scalable.
              </p>
            </div>
          </div>
        </div>

        <div className="row py-3 my-3 "
        >
          <div className="col-sm-12">
            <div className="">
              <h3 className="with">ABOUT BLAZECLAN:</h3>
            </div>
            <div className="col-sm-11">
              <h3 className="second">
                Leading excellence on the cloud, Blazeclan offers robust yet
                dynamic cloud technology to leverage its capabilities of
                providing business flexibility, reduced operational costs,
                decreased time to market, and the security and scalability of
                enterprise workloads for its global customers. Their process led
                transformation approach forms the foundation of their
                multi-dimensional solutions ranging from Cloud Advisory,
                Migration, DevOps and Managed Services amongst others. Blazeclan
                is a Premier Consulting Partner of AWS and a Microsoft Azure
                Gold Partner. Find more information at
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
                Delivering large-scale Managed Services presents its own
                challenges. Every client has a unique infrastructure, with
                diverse Operating Systems, Applications, Cloud providers and
                requirements. Furthermore, production workloads need extra care
                to ensure that every change is measured, approved and reported.
                As such, Patch Management, while recognized as critical is still
                largely left manual. Every server is individually accessed,
                backed up, updated and maintained. Needless to say, this process
                is not only time-taking but also error-prone.
              </p>
              <p className="second">
                For a high-growth organization such as Blazeclan, more clients
                meant more unique scenarios. Blazeclan was looking to simplify
                patch management while keeping the process fast, smooth, and
                error-free. Since their customers spanned from AWS, Azure to
                GCP, they needed a unified workflow, that was robust as well as
                customizable.
              </p>
            </div>
          </div>
        </div>
        <div className="row py-3 my-3 ">
          <div className="col-sm-12">
            <div className="">
              <h3 className="with">THE SOLUTION:</h3>
            </div>
            <div className="col-sm-11">
              <p className="second">
              Infraguard was the perfect fit for this use case – a single dashboard that works across Cloud Providers, is Operating-System agnostic and extremely easy to train on. The core suite of Infraguard’s features includes Patch Management, Access Management, SOP Automation and Governance.
              </p>
              <p className="second">
              With in-built Role-Based Access Control, the setup was easy and quick. Roles and policies for each personnel were clearly defined and enforced. Infraguard has a predefined ‘Patch Operator’ role with just the privileges needed to perform Patching. At the top-level grouping of accounts into companies allowed complete segregation of each of Blazeclan clients. The flexibility to segment servers (based on tags & meta-data) and put them into projects enabled a clear bird’s eye view of the entire server inventory across AWS & Azure.
              </p>
              <p className="second">Blazeclan only needed to schedule the patching for requested servers, based on severity & classification criteria. Apart from that every aspect was taken care of by Infraguard itself. This included custom options such as backups, reboots, exclusion lists and script executions. With the right policies set up, the company did not need to manually enter the customer’s environment for any patch related action. Infraguard also has a live dashboard for the Patching team to monitor during automations, ensuring another layer of supervision for critical environments.</p>
              <p className="second">Infraguard’s dashboard visualizes servers according to Compliance metrics, last-updated dates and also last-activity done dates. Furthermore, detailed reports for Scanning & Installing were integrated into workflows to be automatically sent to emails and ticketing systems. This enabled easy enforcement of governance policies.</p>
              <p className="second">This auto-pilot mode was a huge help in streamlining and scaling Managed Services. For example, even for a specialized task like Patch Management, servers attached to policies were scanned, patched and the final report was delivered to admins at Blazeclan via mail without any manual intervention.</p>
            </div>
          </div>
        </div>

        <div className="row py-3 my-3 ">
          <div className="col-sm-12">
            <div className="">
              <h3 className="with">BENEFITS:</h3>
            </div>
      </div>
      <img src={saving} className="px-5"/>
      </div>

      <div className="row py-3 my-3 ">
          <div className="col-sm-12">
            <div className="">
              <h3 className="para">With Infraguard, Blazeclan has central Patch Management workflows that can be tailored for individual client requirements. The manual processes have been automated, policies enforced and repetitive tasks now run-on auto-pilot on a defined schedule.</h3>
            </div>
      </div>

      
        </div>
        </div>

    
    </>
  );
};

export default BLAZECLAN;
