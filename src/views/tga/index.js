import React from "react";
import "./index.css";
import Button from "../../components/button";
import clone from "../../assests/images/photo/footer-img-1.png";
import { Link } from "react-router-dom";
import tga from "../../assests/images/photo/The-Gate-Acedemy.jpg";
import saving from "../../assests/images/icons/1-Blazeclan-infographic-1.svg";
import resou from "../../assests/images/icons/2-Axcess-infographic-a-1.svg";
import resu from "../../assests/images/icons/2-Axcess-infographic-b-02.svg";

const TGA = () => {
  return (
    <>
      <div className="schedule">
        <div className="overlay">
          <h2 className="animate__animated animate__rotateInUpRight maati">
            THE GATE ACADEMY
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
                One of India’s top Education company lowers infrastructure
                operation costs with Infraguard.​
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
            <img src={tga} className="blazes" />
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
                THE GATE ACADEMY was using a comprehensive dashboard with AWS,
                which was not only time taking in managing it but most the work
                was manual. With this there was inefficiency of servers with no
                automation in place. Infraguard was able implement a
                policy-based server management and user-friendly single
                dashboard for all functioning. With Infraguard custom policies
                were created and implemented for all server management and
                DevOps. Processes such as Key Management, Patch Management,
                Instance State Management were automated after Infraguard
                expertise were involved. These activities were defined for
                timely run on systems.
              </p>
            </div>
          </div>
        </div>

        <div className="row py-3 my-3 ">
          <div className="col-sm-12">
            <div className="">
              <h3 className="with">ABOUT THE GATE ACADEMY:</h3>
            </div>
            <div className="col-sm-11 mt-4">
              <h3 className="second">
                THE GATE ACADEMY is a premiere GATE coaching institute with
                centers across India. They are one of the first education
                institutes in India which leverages technology extensively to
                provide quality GATE coaching to their students. In 2016, they
                were awarded the fastest growing GATE institute in India. They
                have also received many industry recognitions and press
                coverage.
              </h3>
              <p className="second mt-3">
                THE GATE ACADEMY is also empanelled with NPIU (National Project
                Implementation Unit) to provide GATE training under TEQIP-III,
                implemented as a World Bank assisted project to improve the
                quality of technical education in the country.
              </p>
            </div>
          </div>
        </div>
        <div className="row py-1 ">
          <div className="col-sm-12">
            <div className="">
              <h3 className="with">THE CHALLENGE:</h3>
            </div>
            <div className="col-sm-11">
              <p className="second">
                With the kind of growth which The Gate Academy experienced,
                complexities were inevitable. The idea was to grow exponentially
                but stay lean at the same time. Operating in the education
                industry, technology is a huge driving force for them. Founders
                of The Gate Academy were tech-savvy and they knew that the lean
                model which they were trying to achieve was possible only if
                their policies were in place from the beginning.
              </p>
              <p className="second">
                With rapid increase in student numbers as well as physical
                centers, the infrastructure was scaling fast. They were heavily
                using AWS and while it offers a comprehensive dashboard, it is
                created with the entire landscape in mind, not a specific niche
                case. Even if someone understands the technology it might be
                difficult for them to navigate through the console. It needs
                specific training that could be both time-consuming and
                frustrating if one wants to concentrate on growing the business.
                The main areas where The Gate Academy wanted Infraguard to
                concentrate were as follows:
              </p>
            </div>
          </div>
        </div>

        <div className="row  ">
          <div className="col-sm-12 ">
            <ul className="define">
              <li className="">
                Provide a simplified server management dashboard that will be
                easier for their employees to manage.
              </li>
              <li className="">
                Enhance efficiency via Automation: Policies once created should
                work for old instances and new. Reduce new instance addition
                time to minutes.{" "}
              </li>
              <li className="">
                To end SSH key/Password sharing within the company and provide
                policy-based access to servers
              </li>
              <li className="">
                Granular restriction on actions which can be performed by users
              </li>
              <li className="">
                A centralized way to audit activities based on servers and users
                with appropriate filters
              </li>
              <li className="">
                A single dashboard but servers segregated based on projects to
                perform bulk operations like Patch Management, AMI creation,
                Start/Stop of instances, etc. on a bunch of servers
              </li>
              <li className="">
                To be able to control which server is visible to a user/team and
                what actions can be performed on them
              </li>
              <li className="">
                Reduce the knowledge gap for employees to manage servers.
              </li>
            </ul>
            <h2 className="with mt-5">THE SOLUTION:</h2>
            <p className="second">Infraguard’s team merged the business needs with its sophisticated solution. The core of Infraguard is built on setting and automating policy-based tasks which ensure enhanced efficiency with increased security. Listed below are the solutions which worked for their particular needs:</p>
            <ul className="define">
              <li className="">
              The company’s server administration team was onboarded to Infraguard with roles & privileges as per their assigned job needs. All server management & DevOps were done via the platform after that.
              </li>
              <li className="">
              The two teams worked to create custom policies to automate processes like Key Management, Patch Management, Instance State Management, etc. These policies were then assigned to groups of servers to run at defined time intervals.
              </li>
              <li className="">
              Conceptually, once a user is added to Infraguard there is no need for SSH or RDP access. From script execution to key-rotations everything can be done without sharing access keys in a controlled and auditable manner. This worked perfectly for their use case.
              </li>
              <li className="">
              Auditing in Infraguard is done in two different directions – Server and User. These audit pages have appropriate filters and reports are downloadable and shareable. This made Gate Academy’s operations secure and reliable.
              </li>
              <li className="">
              Infraguard’s project page was built keeping simplification in mind. The team could easily select one or multiple servers from one or multiple projects and perform bulk actions like script executions, update management, instance state changes, and many more.
              </li>
              <li className="">
              The solution is also future-proof. Even if Gate Academy works across different AWS regions, all of their servers can be on-boarded and managed from a single dashboard.
              </li>
              
            </ul>





            <h3 className="with mt-5 ">BENEFITS:</h3>

            <h3 className="second">
              The Gate Academy is on its way to change millions of students’
              lives, and Infraguard is the perfect long-term partner to ensure
              that their server infrastructure keeps up with the business
              growth.
            </h3>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default TGA;
