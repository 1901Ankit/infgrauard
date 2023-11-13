import React from "react";
import "./index.css";
import Aos from "aos";
const Video = () => {
  Aos.init({ able: "mobile" });
  return (
    <>
      <div className="video">
        <div className="overlay">
          <h2 className="animate__animated animate__zoomInRight maati">
            VIDEOS
          </h2>
        </div>
      </div>

      <div className="container my-5">
        <div className="row ">
          <div className="col-sm-12 overview text-center">Infraguard-Overview</div>
          <div className="col-sm-4  mt-5">
            <p
              className="rdy"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              INTRODUCTION
            </p>

            <iframe
              width="280"
              height="200"
              src="https://www.youtube.com/embed/S49n6ErrDE0"
              title="YouTube video player"
              className="mt-2 utube"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-sm-4 mt-5">
            <p
             className="introduction  rdy"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              {" "}
              QUICK-OVERVIEW
            </p>

            <iframe
              width="280"
              height="200"
              src="https://www.youtube.com/embed/EJuZcFGCuE4"
              title="YouTube video player"
              className="mt-2 utube"
              data-aos="fade-left"
              data-aos-offset="20"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
           data-aos-once="true"
             data-aos-anchor-placement="top"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-sm-4 mt-5">
            <p
             className="introduction  rdy"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              {" "}
              FEATURES
            </p>

            <iframe
          
              width="280"
              height="200"
              src="https://www.youtube.com/embed/oSqg50cD2HQ"
              title="YouTube video player"
              className="mt-2 utube"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row  introduction">
          <div
            className="col-sm-6 p-1 mt-5 "
            data-aos="fade-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <h3 className="lets feat">AWS Onboarding On Infraguard</h3>
          </div>
          <div
            className="col-sm-6"
            data-aos="fade-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <iframe
            className="utube"
              width="470"
              height="315"
              src="https://www.youtube.com/embed/Nfyf_BTdhng"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="row ">
          <div className="col-sm-12 onboarding">Azure Onboarding On Infraguard</div>
          <div className="col-sm-4 ">
            <div className="mt-4 ">
              <h1
                className="with introduction"
                data-aos="fade-left"
                data-aos-offset="20"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                PART-1
              </h1>
            </div>
            <iframe
              width="280"
              height="200"
              src="https://www.youtube.com/embed/Bo-DZ5ssBCw"
              title="YouTube video player"
              className="mt-3 utube"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-sm-4 ">
            <div className="mt-4 introduction">
              <h1
                className="with"
                data-aos="fade-left"
                data-aos-offset="20"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                PART-2
              </h1>
            </div>
            <iframe
              width="280"
              height="200"
              src="https://www.youtube.com/embed/BpJy9PMOhEc"
              className="mt-3 utube"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-sm-4 ">
            <div className="mt-4 introduction">
              <h1
                className="with"
                data-aos="fade-left"
                data-aos-offset="20"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
           data-aos-once="true"
             data-aos-anchor-placement="top"
              >
                PART-3
              </h1>
            </div>
            <iframe
              width="280"
              height="200"
              className="mt-3 utube"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
              src="https://www.youtube.com/embed/cYlb9TN9q4M"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row ">
          <div className="col-sm-12 onboarding">GCP Onboarding On Infraguard</div>
          <div className="col-sm-4 ">
            <div className="mt-4">
              <h1 className="with"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top">PART-1</h1>
            </div>
            <iframe
            
              width="280"
              height="200"
              className="mt-3 utube"
              data-aos="fade-left"
              data-aos-offset="20"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
           data-aos-once="true"
             data-aos-anchor-placement="top"
              src="https://www.youtube.com/embed/bDqkOfy_N8I"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-sm-4 ">
            <div className="mt-4">
              <h1 className="with"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top">PART-2</h1>
            </div>
            <iframe
            
              width="280"
              height="200"
              className="mt-3 utube"
              data-aos="fade-left"
              data-aos-offset="20"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
           data-aos-once="true"
             data-aos-anchor-placement="top"
              src="https://www.youtube.com/embed/7pWiWfvEnjE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-sm-4 ">
            <div className="mt-4">
              <h1 className="with"
              data-aos="fade-left"
              data-aos-offset="20"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
           data-aos-once="true"
             data-aos-anchor-placement="top">PART-3</h1>
            </div>
            <iframe
              width="280"
              height="200"
              className="mt-3 utube"
              data-aos="fade-left"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            data-aos-once="true"
              data-aos-anchor-placement="top"
              src="https://www.youtube.com/embed/vcfsD8OMNZs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container py-5 feat">
        <div className="row ">
          <div className="col-sm-6 p-1 mt-5 "
          data-aos="fade-right"
          data-aos-offset="20"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        data-aos-once="true"
          data-aos-anchor-placement="top">
            <h3 className="secure mt-5">
              SIMPLE SECURE SERVER MANAGEMENT HOW TO CREATE A POLICY TO SCAN
              SERVERS ON INFRAGUARD
            </h3>
          </div>
          <div className="col-sm-6"
           data-aos="fade-left"
           data-aos-offset="20"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
         data-aos-once="true"
           data-aos-anchor-placement="top">
            <iframe
            className="utube"
              width="430"
              height="315"
              src="https://www.youtube.com/embed/c4uXALuLw2U"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container py-4 feat">
        <div className="row ">
          <div className="col-sm-6 p-1 mt-5 "
          data-aos="fade-right"
          data-aos-offset="20"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        data-aos-once="true"
          data-aos-anchor-placement="top">
            <h3 className="secure mt-5">
              SIMPLE SECURE SERVER MANAGEMENT HOW TO CREATE A POLICY TO INSTALL
              PATCHES ON INFRAGUARD
            </h3>
          </div>
          <div className="col-sm-6  "
           data-aos="fade-left"
           data-aos-offset="20"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
         data-aos-once="true"
           data-aos-anchor-placement="top">
            <iframe
            className="utube"
              width="430"
              height="315"
              src="https://www.youtube.com/embed/vZX56cu_k-4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
