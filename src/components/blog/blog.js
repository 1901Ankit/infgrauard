import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineFolder } from "react-icons/ai";
import micro from "../../assests/images/photo/Microsoft-Patches-1024x683.jpg";
import service from "../../assests/images/photo/Patch-Management-1024x683.jpg";
import Aos from "aos";

const Blog = () => {
  Aos.init({ able: "mobile" });

  return (
    <>
        <div className="contact">
        <div className="overlay">
          <h2 className="animate__animated animate__rotateInUpRight maati">
            BLOGS
          </h2>
        </div>
      </div>
      <div className="container mt-5 pt-2">
        <div className="row ">
          <div
            className="col-sm-5 mt-5 upper_div rounded"
            data-aos="fade-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <img src={micro} width="100%" className=" rounded process_hover" />
          </div>

          <div className="col-sm-7  mt-5 ">
            <div className=" px-5">
              <h2 className="witho">
                <AiOutlineUser /> Kislay Chandra
                <AiOutlineCalendar className="ms-3" /> November 3, 2022
                <a href="/uncategorized" className="ang ms-3">
                  <AiOutlineFolder /> Uncategorized
                </a>
              </h2>

              <div className="">
                <h3
                  className="toge mt-4"
                  data-aos="fade-left"
                  data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  MANAGING MICROSOFT PATCHES (PATCH TUESDAY/UPDATE TUESDAY)
                </h3>
                <div className="mt-4">
                  <p
                    className="bank"
                    data-aos="fade-left"
                    data-aos-offset="20"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top"
                  >
                    Blog Managing Microsoft Patches (Patch Tuesday/Update
                    Tuesday) Since 2003, it has been Microsoft’s tradition to
                    release security updates on patch tuesday. It makes system
                    admins easy to schedule testing and deployment. Let’s
                    explore the whys, Hows, pros, cons of Patch…
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-2">
        <div className="row ">
          <div
            className="col-sm-5 mt-5 upper_div rounded"
            data-aos="fade-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <img
              src={service}
              width="100%"
              className=" rounded process_hover"
            />
          </div>

          <div className="col-sm-7  mt-5 ">
            <div className=" px-5">
              <h2 className="witho chndr">
                <AiOutlineUser /> Kislay Chandra
                <AiOutlineCalendar className="ms-3" /> October 14, 2022
                <a href="/uncategorized" className="ang ms-3">
                  <AiOutlineFolder /> Uncategorized
                </a>
              </h2>
              <div className="">
                <h3
                  className="toge mt-4"
                  data-aos="fade-left"
                  data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  HOW OFTEN SHOULD PATCH MANAGEMENT BE PERFORMED?
                </h3>
                <div className="mt-4">
                  <p
                    className="bank"
                    data-aos="fade-left"
                    data-aos-offset="20"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                  >
                    Blog How often should patch management be performed? A patch
                    is a small fix to an existing piece of software, usually
                    used to fix bugs or security vulnerabilities. Patch
                    Management is the process of handling all the patches of
                    components…
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

export default Blog;
