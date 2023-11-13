import React from "react";
import "./index.css";
import webs from "../../assests/images/photo/Web-Page-57.png";
import skilled from "../../assests/images/photo/Infraguard-Partner-Program-2.gif";
import Multicarousel from "../../components/multicarousel";
import Multi from "../../components/multi";
import Slider from "../../components/slider";
import arrow from "../../assests/images/photo/Arrow-1.svg";
import customer from "../../assests/images/photo/Web-Page-59.png";
import cyber from "../../assests/images/photo/SOLUTIONS-FOR-EVERYONE.jpg";
import partner from "../../assests/images/photo/Web-Page-58.png";
import scalability from "../../assests/images/photo/Proven-Scalability-to-manage-tens-of-thousands-of-servers.jpg";
import globally from "../../assests/images/photo/Infraguard-is-recognized-globally.jpg";
import development from "../../assests/images/photo/Continuous-New-Feature-Development.jpg";
import svgs from "../../assests/images/icons/svgviewer-output.svg";
import svg from "../../assests/images/icons/svgviewer-output (2).svg";
import svgg from "../../assests/images/icons/svgviewer-output (1).svg";
import centerpic from "../../assests/images/photo/Centres-of-excellence.gif";
import Aos from "aos";
const Partner = () => {
  Aos.init({ able: "mobile" });
  return (
    <>
      <div className="partner">
        <div className="overlay">
          <h2 className="animate__animated animate__rollIn maati">PARTNERS</h2>
        </div>
      </div>
      <div className="container my-5 ">
        <div className="row">
          <div
            className="col-sm-6 prod bg-white px-5 mt-5 prgd"
            data-aos="fade-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <p className="rdy">WHAT IS IPP?</p>
            <h2 className="lets my-3">Infraguard Partner Program</h2>
            <p className="auotcat my-4 prgns">
              Infraguard’s Partner Program is crafted to provide our partners to
              add a unified server management services under their portfolio and
              increase their customer reach in this fast and steady growing
              digital era where maximum clients are facing the problem of
              managed services automation, patch management, security and
              compliance management, SOP automation. Our partners are considered
              the best in the cloud server management industry. As a partner,
              you can choose a program type and tier that allows you to access
              our best-in-class sales tools, complimentary sales, and technical
              training for your team, with co-op funds to flourish your
              business.
            </p>
          </div>
          <div
            className="col-sm-6 teams"
            data-aos="fade-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          data-aos-once="true"
            data-aos-anchor-placement="top"
          ></div>
        </div>
      </div>

      <div className="container  py-5">
        
          <div className="row feat">
            <div className="col-sm-6 ">
              <p className="rdy">WHAT IS IPP?</p>
              <h2 className="lets my-3">Infraguard Partner Program?</h2>
              <p className="cats prgns ">
                Partner with Infraguard to scale up your Managed Services
                business with our certified Server Automation Solutions.
              </p>
              <p className="cats prgns ">
                Infraguard is an ISO, SOC2 TYPE 2, PCI Certified Software that
                enables enterprises and partners to manage hybrid cloud
                workloads. Whether you are a Services Provider, System
                Integrator or Technology Distributor with our Tiered Partnership
                Plans, you will get the support & solutions to expand in newer
                segments with pre-defined processes.
              </p>
            </div>
            <div className="col-sm-6">
              <img src={skilled} className="skilled" />
            </div>
            <div className="col-sm-11  mt-5">
              <h3 className="why usa">Why partner with us:</h3>
              <ul className="holisolution mt-4 mx-1">
                <li className="plans">
                  Holistic Solution: An all-in-one dashboard that manages all
                  Cloud Providers and Operating Systems to offer Access
                  Management, Patch Management and Server Automation. Wherever
                  your customer base is, Infraguard will be able to deliver
                  value.
                </li>
                <li className="mt-3 plans">
                  ROI Driven: Our Partnership plans are built to lead you to
                  success. From the ease of implementation to a custom billing
                  engine, we ensure every activity is tracked, converted and
                  measured for continuous ROI optimisation.
                </li>
                <li className="mt-3 plans">
                  Security at its core: Cybersecurity is no longer a buzzword;
                  it is a necessity. That is where Infraguard shines, with
                  broadly applicable Patch, Access and Compliance features.
                </li>
                <li className="mt-3 plans">
                  Global data locations: Infraguard’s delivery mechanisms ensure
                  options for local data residency and compliances.
                </li>
                <li className="mt-3 plans">
                  24/7 Helpdesk: Take advantage of our fully-featured support
                  plans that will keep your end customers happy and secure.
                </li>
                <li className="plans mt-3">
                  Global success case studies: Our global case studies bring
                  relevance and motion to your Sales Process.
                </li>
                <li className="mt-3 plans">
                  Pre & Post-Sales Support: Starting a new division or ramping
                  up an existing base, our Sales Experts are available for
                  Strategy, Planning and Execution
                </li>
              </ul>
            </div>
          </div>
      
      </div>

      <div className="container ">
        <div className="row">
        <div className="col-sm-4 mb-4 ">
            <div
              className="prodd bg-white px-4"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <img src={svg} className="" />
              <h3 className="let mt-2 ptch">Increase your customer reach</h3>
              <p className="cat mt-4 plans">
                In today’s digital world, every organization is looking forward
                to grow their digital dependency with hassle free management of
                multiple servers. With Infraguard’s partner Program you can
                achieve exponential growth for the digital aspects of your
                business.
              </p>
            </div>
          </div>
          <div className="col-sm-4 mb-4 ">
            <div
              className="prodd bg-white px-4"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <img src={svgs} className="" />
              <h3 className="let mt-2 ptch">Manage your servers across globe</h3>
               <p className="cat mt-4 plans">
                Your business can be based out of APAC or EMEA region and you
                can still manage your servers with Infraguard. Infraguard’s
                leadership and partner presence in Singapore, India, USA and
                Australia assures and manages servers across geographies.
              </p>
            </div>
          </div>
          <div className="col-sm-4 mb-4 ">
            <div
              className="prodd bg-white px-4"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <img src={svgg} className="" />
              <h3 className="let mt-2 ptch">
                Nurture your business with our certified platform
              </h3>
                <p className="cat mt-4 plans">
                Grow and manage your large infrastructure with Infraguard’s
                certified (ISO, PCI DSS, AWS) platform without worrying about
                patch management, access management, server automation, security
                and compliances. Be the forefront in technology with us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-4 mt-5">
        <div className=" py-5">
          <div className="row ">
            <div
              className="col-sm-2 light"
              data-aos="fade-right"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
            ></div>
            <div
              className="col-sm-6 p-2 jsds"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <div className="px-5 sing">
                <h3 className="singl">SINGLE DASHBOARD</h3>
                <div className="mt-3">
                  <h2 className="les">
                    Proven Scalability to manage tens of thousands of servers
                  </h2>
                </div>
                <div className="mt-3 jsds">
                  <p className=" multiplat">
                    A proven platform with multiple certifications, case
                    studies, and AWS competencies that is being used to manage
                    large infrastructures daily. You can manage thousands of
                    servers from a single dashboard. And scalability is
                    unlimited with future-ready security.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-4 meeting"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <div className="hover"
               data-aos="fade-up"
               data-aos-offset="20"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
             data-aos-once="true"
               data-aos-anchor-placement="top">
                <h2 className="hovr">
                  We understand the importance of having a solid business
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Multicarousel />
      <Multi />

      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-sm-12 mt-5">
            <div className="">
              <h2 className="rdy">STAND OUT QUALITIES</h2>
              <h3 className="lets mt-3">Centres of excellence</h3>
              <ul className="mt-3">
                <li className="cat mt-3">Central access management</li>
                <li className="cat mt-3">Hassle-free patching</li>
                <li className="cat mt-3">Operations & automation</li>
                <li className="cat mt-3">Multi-provider support process automation</li>
              </ul>
            </div>
          </div>
          <div className="mt-4"></div>
         
          <img src={centerpic} width="100%" height="100%"/>
        </div>
      </div>
      <Slider />

      <div className="container py-5 mt-5">
        <div className="row mt-5">
          <div className="col-sm-12 feat">
            <div className="">
              <h2 className="rdy">WHAT IS IPP MODEL?</h2>
              <h3 className="lets mt-3">
                Infraguard Partner Program Model & Why ?
              </h3>
              <ul className="mt-3">
                <li className="cat mt-3">
                  1st Company in APAC to become AWS Well-Architected API Partner
                </li>
                  <li className="cat mt-3">
                  Used by world’s largest Managed Service Providers
                </li>
                  <li className="cat mt-3">SaaS & Customer-Deployed Models</li>
                  <li className="cat mt-3">AWS Marketplace ready</li>
              </ul>
            </div>
          </div>
        
          <div className="col-sm-1"></div>
          <div className="col-sm-2 mt-5"
           data-aos="fade-right"
           data-aos-offset="20"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
         data-aos-once="true"
           data-aos-anchor-placement="top">
            <img src={webs} className="webs" />
            <h3 className="infraa">INFRAGUARD</h3>
          </div>
          <div className="col-sm-2"
           data-aos="fade-right"
           data-aos-offset="20"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
         data-aos-once="true"
           data-aos-anchor-placement="top">
            <img src={arrow} className="arrow" />
          </div>
          <div className="col-sm-2 mt-5"
           data-aos="fade-right"
           data-aos-offset="20"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
         data-aos-once="true"
           data-aos-anchor-placement="top">
            <img src={partner} className="prt" />
            <h3 className="infraa">PARTNER</h3>
          </div>
          <div className="col-sm-2"
           data-aos="fade-right"
           data-aos-offset="20"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
         data-aos-once="true"
           data-aos-anchor-placement="top">
            <img src={arrow} className="arrow" />
          </div>
          <div className="col-sm-2 mt-5 
          "
           data-aos="fade-right"
           data-aos-offset="20"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
         data-aos-once="true"
           data-aos-anchor-placement="top">
            <img src={customer} className="compu" />
            <h3 className="infraa">CUSTOMER</h3>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>

      <div className="container  mt-5">
        <div className="row mt-5">
          <div className="col-sm-9">
            <div className="">
              <h2 className="with">WHY PARTNER WITH INFRAGUARD?</h2>
              <h3 className="lts mt-3">
                Infraguard was started with a vision to build a future-proof
                solutions for Server Management and Security.
              </h3>
            </div>
          </div>
        </div>
       
        <div className="row">
          <div className="col-sm-3 p-0 ">
            <div className="globally_sECTION"
             data-aos="fade-up"
             data-aos-offset="20"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
           data-aos-once="true"
             data-aos-anchor-placement="top">
              <img src={globally} width={285} className="sclr" />
              <div className="Globally_back p-5">
                <h5 className="text-white  prov ">
                  Infraguard is recognized globally
                </h5>
                <p className="text-white prtn">
                  With leadership & partner presence in Singapore, India,
                </p>
                <p className="text-white  prtn">
                  {" "}
                  USA, Australia – Infraguard has global success case studies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 p-0">
            <div className="globally_sECTIONs"
             data-aos="fade-up"
             data-aos-offset="20"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
           data-aos-once="true"
             data-aos-anchor-placement="top">
              <img src={scalability} width={285} height={210} className="sclr" />
              <div className="p-5 proen">
                <h5 className="text-white prov">
                  Proven Scalability to manage tens of thousands of servers
                </h5>
                <p className="text-white  prtn">
                  A proven platform with multiple certifications, case studies
                  and AWS competencies that is being used to manage large
                  infrastructures daily
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 p-0 globally_sECTIO"
           data-aos="fade-up"
           data-aos-offset="20"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
         data-aos-once="true"
           data-aos-anchor-placement="top">
            <div className="">
              <img src={development} className="dev_img" />
              <div className="p-5">
                <h5 className="let">Continuous New Feature Development</h5>
                <p className=" prtn mt-2">
                  Infraguard is now Asia Pacific’s first AWS Well Architected
                  API Partner. Working with Infraguard means always being at the
                  forefront of technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 mt-5">
        <div className="row">
          <div className="col-sm-5 px-2 mt-5 ">
            <div className="sosls featt">
              <h4 className="with">SOLUTIONS FOR EVERYONE</h4>
              <h3 className="infrast">
                Infraguard works for all large infrastructures.
              </h3>
              <p className="auotcat mt-3  me-4">
                Infraguard manages large-scale workloads and more than 20,000
                servers managed daily. We believe in high-scalability in servers
                under management.
              </p>
            </div>
          </div>  
          <div className="col-sm-3"
          >
            <img src={cyber} width={322} height={696} 
             className="cbr"
              data-aos="fade-up"
              data-aos-offset="20"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
           data-aos-once="true"
             data-aos-anchor-placement="top"/>
          </div>
          <div className="col-sm-4 px-5 lgre"
           data-aos="fade-up"
           data-aos-offset="20"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
         data-aos-once="true"
           data-aos-anchor-placement="top">
            <div className="Globack p-4">
              <h5 className="text-white proav">Mid-Large Enterprises</h5>
              <p className="text-white platfromsa">
                Infraguard’s self-service Server Management platform allows mid
                to large scale enterprises across sectors to manage and automate
                large server infrastructures.
              </p>
            </div>
            <div className="proven p-4">
              <h5 className="text-white proav">Managed Service Providers</h5>
              <p className="text-white platfromsa">
                Managed Service Providers of all sizes use Infraguard to scale
                up their services, offer platform-backed benefits to their
                customers and lower costs by bringing in automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
