import React from "react";
import "./index.css";
import sinfo from "../../assests/images/photo/Sapphire-Infotech.jpg";

const Runon = () => {
  return (
    <>
      <div className="schedule">
        <div className="overlay">
          <h2 className="animate__animated animate__rotateInUpRight maati">
          SAPPHIRE INFOTECH
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
              How Sapphire Infotech built a highly secure and scalable Managed Services Capability with Infraguard.
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
            <img src={sinfo} className="blazes" />
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
              <p className="secon mt-2">
              Sapphire Infotech Ventures Pvt. Ltd is SAP Silver, RISE with SAP Partner, Amazon (AWS) Advance Consulting & SAP Competency Partner providing services for medium and large organizations in the public and private sectors globally.
              </p>
              <p className="secon mt-2">
              Sapphire Infotech has successfully Migrated SAP Customers on AWS Cloud across industries which includes Pharmaceuticals, Financial Services, Insurance, Healthcare, Manufacturing, Textile, Chemicals, Cement, Automotive, Agriculture, Consumer Goods, FMCG, Real Estate, Utilities and Public Sector. They work with prospective & existing SAP customers as Trusted Advisors in their SAP / Cloud Journey and help them to build Roadmap, Sizing, Solution Design, Implement & Manage the entire SAP Landscape Application and Infrastructure on Cloud. They help SAP customers to Migrate their existing SAP workloads / deploy new SAP Implementations on AWS Cloud.
              </p>
            </div>
          </div>
        </div>

        <div className="row py-3 my-3 ">
          <div className="col-sm-12">
            <div className="">
              <h3 className="with">ABOUT SAPPHIRE INFOTECH:</h3>
            </div>
            <div className="col-sm-11">
              <h3 className="second">
              Sapphire Infotech Ventures Pvt. Ltd is SAP Silver, RISE with SAP Partner, Amazon (AWS) Advance Consulting & SAP Competency Partner providing services for medium and large organizations in the public and private sectors globally.
              </h3>
              <h3 className="second mt-3">Sapphire Infotech has successfully Migrated SAP Customers on AWS Cloud across industries which includes Pharmaceuticals, Financial Services, Insurance, Healthcare, Manufacturing, Textile, Chemicals, Cement, Automotive, Agriculture, Consumer Goods, FMCG, Real Estate, Utilities and Public Sector. They work with prospective & existing SAP customers as Trusted Advisors in their SAP / Cloud Journey and help them to build Roadmap, Sizing, Solution Design, Implement & Manage the entire SAP Landscape Application and Infrastructure on Cloud. They help SAP customers to Migrate their existing SAP workloads / deploy new SAP Implementations on AWS Cloud.</h3>
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
              In the case of Managed Services providers, it will be safe to say “With great customers come great complexities”. The responsibility of maintaining client servers needs continuous attention on security, access, people and systems. There are attached complexities in hiring the right-skilled workforce that can be trusted with customer workloads. Further, the processes should account for limiting manual errors as much as possible, particularly for a fast-scaling company. A large team working on a large number of client infrastructures meant that access management could become very complicated very fast.
              </p>
              <p className="second">Sapphire Infotech wanted a comprehensive solution that enabled Privileged Access Management on one part while also providing Automated Server Management. Limiting access to only the necessary personnel (role-based policies) while maintaining a forever log of actions performed were part of the requirement.</p>
              <p className="second">For the company, it was difficult to have a bird’s eye view of the entire inventory under management as they were managing hundreds of servers in multiple regions and with multiple cloud providers. This lack of view was also making it difficult to take bulk actions and even repetitive work had to be done manually.</p>
              <p className="second">These challenges continued when faced with specialized tasks such as Patch Management and Key Rotations.</p>
              <p className="second">The management knew that secure automation of these tasks was the answer, and they were looking for a custom solution that could ease up processes while enhancing security on every layer.</p>
            
              <h3 className="with mt-5">THE SOLUTION:</h3>
              <p className="second">
              Infraguard was the perfect fit for this use case – a single tool that is able to replace multiple software as well as the bulk of manual processes that could have proved a hindrance in scalability.
              </p>
              <p className="second">Sapphire Infotech uses OKTA as their identity provider. Since Okta has native integration with Infraguard’s login, the setup was easy and quick. Roles and policies for each personnel were clearly defined and enforced. The administrators had the most privileges while the readers had the fewest – Sapphire Infotech could easily allocate the relevant roles to their team. There was absolute control on which employees could access which servers, and also a granular limitation on what they could do on their assigned servers. This control came with complete peace of mind for the company as now it could securely handle any number of clients.</p>
            <p className="second">Infraguard’s built-in flexibility to segment servers and group them into projects enabled a clear bird’s eye view of the entire inventory. This was especially helpful as Sapphire Infotech was managing multiple clients. Bulk actions could be performed on any number of servers with a single click.</p>
            <p className="second">Operationally, the company had the ability to run scripts on any server without creating or sharing access keys. They could store frequently-run scripts centrally and run it on any number of servers by just two clicks. Optionally, they could also schedule this execution for a later date.</p>
            <p className="second">The two teams worked together to create custom policies to automate standard operating procedures. These policies were then assigned to groups of servers to run at defined time intervals. This enabled Sapphire Infotech to never touch the customer’s environment once suitable policies were at the place.</p>
            <p className="second">This auto-pilot mode was a huge help in streamlining Managed Services. The concept of monthly maintenance moved from the employee’s task list to the employee’s inbox. For example, even for a specialized task like Patch Management, servers attached to policies were scanned, patched and the final report was delivered to admins at Sapphire Infotech via mail without any manual intervention.</p>
            <p className="second">The auditing & logging was also complete as Infraguard provided a comprehensive report of actions taken on any server as well as the action done by any user. This report too could be emailed on a set schedule.</p>
            </div>
          </div>

          
        </div>

        <div className="row ">
        
          <div className="col-sm-12">
            <h3 className="with  ">BENEFITS:</h3>

            <h3 className="second">
            Working in complete synergy with Infraguard, Sapphire Infotech is now fully future-proof as it scales and expands into new territories. The manual processes have been automated, policies for access have been implemented and repetitive tasks now run-on auto-pilot on an approved schedule. As Sapphire Infotech expands, its clients too are now more secure and protected from maintenance or security pitfalls.
            </h3>
            
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Runon;
