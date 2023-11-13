import React from "react";
import "./index.css";
import axcess from "../../assests/images/photo/Axcess.jpg";
import resou from "../../assests/images/icons/2-Axcess-infographic-a-1.svg";
import resu from "../../assests/images/icons/2-Axcess-infographic-b-02.svg";

const Axcess = () => {
  return (
    <>
      <div className="schedule">
        <div className="overlay">
          <h2 className="animate__animated animate__rotateInUpRight maati">
            AXCESS
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
                How Axcess enhanced their Managed Services Automation Capability
                with Infraguard.
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
            <img src={axcess} className="blazes" />
          </div>
          <div className="col-sm-7 px-4">
            <div className=""
              data-aos="fade-left"
              data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                data-aos-once="true"
                  data-aos-anchor-placement="top">
              <h2 className="with smyt">SUMMARY:</h2>
              <p className="secondd mt-2">
                Axcess helps customers harness the power of cloud though their
                expertise in managing cloud through advanced automation. As a
                fast-growing company, Axcess, in a relatively short period of
                time, has quickly become a niche consulting firm specializing in
                Cloud Advisory, Cloud Managed Services, and DevOps Automation.
                With this growth, Axcess partnered with Infraguard to streamline
                and automate their Server Management Operations. Infraguard was
                able to scale up their Managed Services and its security. The
                compliances and security patches were enforced and operations
                were performed smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>

        <div className="row py-2 my-2 ">
          <div className="col-sm-12">
            <div className="">
              <h3 className="with">ABOUT AXCESS:</h3>
            </div>
            <div className="col-sm-11">
              <h3 className="second">
                Axcess started in 2014 with a belief that optimization of
                resources is the most important factor for businesses to grow
                and prosper and the Cloud is one of the ways to achieve it. They
                have expertise in Amazon Web Services (AWS), Microsoft Azure and
                OpenStack cloud. Axcess has also been recognized as an AWS
                Advanced Consulting Partner and AWS DevOps Competency Partner by
                AWS.
              </h3>
          
            </div>
          </div>
        </div>
        <div className="row   ">
          <div className="col-sm-12">
           
              <h3 className="with">THE CHALLENGE:</h3>
            
            <div className="col-sm-11">
              <p className="second">
                With a worldwide client base, Axcess was executing a variety of
                sophisticated cloud migration projects. Each case was unique and
                the skilled team at Axcess would create innovative solutions to
                match client expectations. Once the projects were completed,
                they wanted to quickly start on the server management side of
                the operations. Even with unique development/migration projects,
                the Managed Services processes were largely similar and often
                with matching sets of actions repeated across multiple clients.
                In such a scenario, they were looking for a common server
                management solution that was easy to train on, that worked
                across different providers and Operating Systems and that had
                the potential to customise.
              </p>
              <h3 className="with mt-4">THE SOLUTION:</h3>
              <p className="second">
                Infraguard was the perfect fit for this use case – a single tool
                that is able to replace multiple software as well as the bulk of
                manual processes that often prove hindrance in scalability.
                Axcess created a group organization unit within Infraguard. This
                abstraction allowed them to create multiple, fully-segregated
                client accounts. With easy user management features, they could
                create their employee roles and assign them to one or multiple
                client accounts. Furthermore, within client accounts also they
                could group servers (across providers) into Projects for easy
                bulk action and automation settings.
              </p>
            </div>
          </div>

          <div className="">
            <img src={resou} className="res" />
          </div>
        </div>

        <div className="row  ">
          <div className="col-sm-12">
            <p className="second">
              Once the structure was set up in the guided onboarding process,
              roles and policies for each personnel were clearly defined and
              enforced. The administrators had the most privileges while the
              readers had the fewest – Specific roles such as a Patch Operator
              had privileges associated with performing only Patch Management.
            </p>
          </div>
          <div className="col-sm-12 mt-3">
            <img src={resu} className="resu featst " />
            <div className="featts">

            <p className="second">
              The second part of the solution came with Infraguard’s built in
              workflows for Managed Services Providers. Commonly used scripts
              were stored at a central location in script inventory. These
              scripts were extensible from simple commands as well as
              complicated actions that required entries at run time. While these
              scripts could be run on individual machines, the power came when
              employing them in the following two scenarios:
            </p>
            </div>
            <ul className="define">
              <li className="">
                Putting them into scheduled automations. Event policies were
                created that would run at a specific time. They were then
                attached to a group of servers. This ensured running on
                auto-pilot without manual intervention.
              </li>
              <li className="mt-3">
                servers. This ensured running on auto-pilot without manual
                intervention. Grouping servers based on use case and running
                bulk scripts. The simple use case was that if the client had 20
                EC2 instances running a program and all 20 needed script
                execution, Axcess did not need to individually log in to each
                machine – they could simply run the script on all machines from
                one action.
              </li>
            </ul>
            <p className="second ">
              Finally, the third part of solution was to use Infraguard Open API
              and connect with 3rd party technology providers. This meant
              integration with client’s Ticketing Systems, Shift Management
              Providers and any other similar workflow solutions. This made the
              operations seamless and efficient.
            </p>

            <p className="with mt-5 bene  ">BENEFITS:</p>

            <p className="second bene">
              Working in complete synergy with Infraguard, Axcess continues to
              expand and scale up its Managed Services. Internal security is
              monitored and enforced, and operations are performed efficiently.
              Furthermore, one single team can manage any cloud provider without
              the need to impart custom training.
            </p>
          </div>
        </div>
      </div>
 
    </>
  );
};

export default Axcess;
