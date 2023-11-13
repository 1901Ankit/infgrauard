import React from "react";
import "./index.css";

import kulzia from "../../assests/images/photo/Kuliza.jpg";

import graphic from "../../assests/images/icons/3-Kuliza-infographic-2.svg";

const Kulzia = () => {
  return (
    <>
      <div className="schedule">
        <div className="overlay">
          <h2 className="animate__animated animate__rotateInUpRight maati">
            KULIZA
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
                How Kuliza’s Financial Industry Product Lend.in used Infraguard
                for easy post-installation management.
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
            
            <img src={kulzia} className="blazes" />
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
              <p className="seconde mt-2">
                Lend.in is Kuliza’s flagship lending product, The low code
                lending suite for banks and lending institutions to increase the
                overall efficiencies while decreasing the cost and go-to-market
                time for customers. The software is installed in client
                locations and needed secure update management to function
                optimally as well as comply with regulations. Furthermore, there
                were other common tasks like log & backup management that could
                benefit from automation. Infraguard’s comprehensive feature
                suite was the proposed solution for this requirement.
              </p>
            </div>
          </div>
        </div>

        <div className="row py-3 my-3 ">
          <div className="col-sm-12">
            <div className="">
              <h3 className="with">ABOUT KULIZA:</h3>
            </div>
            <div className="col-sm-11">
              <h3 className="second">
                Kuliza is a Select AWS Technology Partner and leading provider
                of digital transformation and operational intelligence solutions
                for financial enterprises. Since 2006, Kuliza has executed more
                than 120 digital transformation projects for global start-ups
                and industry-leading global enterprises.
              </h3>
              <h3 className="second">
                With Lend.in, the idea to scale, evolve and continuously improve
                the loan processing by leveraging the customer-centric design
                and new age technologies is brought to life using Lend.in.
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
                The financial industry has always been specific about the
                policies & processes that software vendors need to employ. While
                regular processes like update management and logging still need
                to be done, they require an added layer of security in this
                industry. Lend.in provides a secure platform with essential
                building blocks to configure robust lending systems to improve
                every aspect of the business and financial enterprises worldwide
                are its customers. The software, whether installed in client
                infrastructure or fully managed by Kuliza, required a common set
                of actions which were Update Management, Backup Management, Log
                Management & Script Execution. Infraguard was the proposed
                solution to execute these tasks within an in-built robust Access
                Management System.
              </p>
              <h3 className="with mt-5">THE SOLUTION:</h3>
              <p className="second">
                Infraguard shines in this use case. The ISV can create separate
                client accounts within the Infraguard dashboard. With easy user
                management features, employees are assigned roles and one or
                multiple client accounts. Furthermore, if the client
                installation had multiple instances, they could group servers
                into projects for easy bulk action and automation settings. Once
                the structure was set up in the guided onboarding process, roles
                and policies for each personnel were clearly defined and
                enforced. Thereafter, Kuliza could manage multiple client
                installations from a single dashboard.
              </p>
            </div>
          </div>

          <div className="">
            <img src={graphic} className="graph" />
          </div>
        </div>

        <div className="row ">
          <div className="col-sm-12">
            <p className="second">
              Specifically, Kuliza could now create manual and automated
              workflows to complete the following tasks that earlier required
              access to individual servers.
            </p>
          </div>
          <div className="col-sm-12 mt-2">
            <ul className="define">
              <li className="">
                <p>
                  <b>Patch Management: </b>
                  <span>
                    Kuliza created centralized patch policies that were divided
                    into regular Scan and Install actions. At defined schedules,
                    the Client servers were scanned for pending updates and the
                    report fed to a ticketing system. On approval from the
                    client, install policies were set up for the approved
                    patches. At designated time, the update happened and reports
                    were again sent to the ticketing system. A live status
                    dashboard was available for the Patch Maintenance team to
                    view the process as it ran. &nbsp;
                  </span>
                </p>
                </li>
                <li className="">
                <p>
                  <b>Process Restarts: </b>
                  <span>
                  Infraguard has built-in EC2 Start/Stop/Reboot buttons. These can be applied to individual as well as groups of servers. Furthermore, automated policies can be set up which Start or Stop instances at defined times/days. The other side of this equation is the running scripts to restart individual scripts. Again, Kuliza set up automatic script execution schedules while having the freedom to manually restart scripts across server groups.
 &nbsp;
                  </span>
                </p>
                </li>
                <li className="">
                <p>
                  <b>Backup Management:  </b>
                  <span>
                  As add-ons to every update management process, Kuliza could create Backup policies both pre & post-installation. &nbsp;
                  </span>
                </p>
                </li>
                <li className="">
                <p className="">
                  <b>Log Management:</b>
                  <span>
                  Again, in the financial industry it is critical that access is not only regulated but also monitored. Every action taken from Infraguard is logged for review. This logging is done on both user as well as server level. &nbsp;
                  </span>
                </p>
              </li>
                <li className="">
                <p>
                  <b>Maintenance Scripts:</b>
                  <span>
                  Finally, for ad-hoc application or process specific action, there were three solutions. First was the inbuilt script inventory that would centrally store approved scripts that can run on single, multiple servers. Secondly, an application detection feature, could find applications running on any instance. Common actions were encoded in button clicks to remove the need of typing scripts. And finally, for 3rd party technology providers, Infraguard’s open API provided custom integration & action options – actions that were still within robust access management policies. &nbsp;
                  </span>
                </p>
              </li>
            </ul>

            <h3 className="with mt-5 ">BENEFITS:</h3>

            <h3 className="second">
            Using Infraguard in financial industry server management brings forth multiple benefits. Internal security is ensured with multiple layers of RBAC, approvals, central policies and reduction in manual intervention. Furthermore, anytime the regulation changed, there was a central point to take action from – Infraguard- instead of the erstwhile method of manually changing moving parts across client locations.
            </h3>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Kulzia;
