import React from "react";
import input from "../../components/input";
import Button from "../../components/button";
import { useForm } from '@formcarry/react'
import Select from 'react-select'
import { useNavigate } from "react-router-dom";

const Significant = () => {
  let navigate = useNavigate();
  const { state, submit } = useForm({
    id: 'Cko5NXHDuH',
  })
  
  if (state.submitting) {
  
    navigate('/thankyou')
  }
  return (
    <>
      <div className="schedule">
        <div className="overlay">
          <h2 className="animate__animated animate__rotateInUpRight maati">
            Significant
          </h2>
        </div>
      </div>
      <div className="container mt-5 py-3">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="lets ">
              Significant Features of Electronic Deal Tools
            </h2>

            <p className="auotcat mt-4">
              Using virtual deal tools helps establishments streamline the
              agreement obama administration process. This is especially
              beneficial for mergers and acquisitions. It also allows businesses
              to measure data for making informed business decisions. These
              tools can be employed by a wide array of businesses, including
              private equity finance, law firms, and investment banking.
            </p>

            <p className="auotcat mt-3">
              Some of the best digital deal equipment have unnatural
              intelligence features. These features can help businesses make
              better decisions and foresee the results of a deal within seven
              days. Moreover, several tools involve electronic digital personal
              functions that can reduce the time it will take to process
              contracts. These tools can also reduce the size of a deal breaker
              record.
            </p>
            <p className="auotcat mt-3">
              Various other important features of VDRs include secure encryption
              strategies and ISO compliant security. These features are
              essential intended for ensuring the safety of hypersensitive data.
              Additionally, these applications must also permit internal
              personnel activities for being monitored. These features likewise
              facilitate connection between individuals, which is essential
              during the package process.
            </p>
            <p className="auotcat mt-3">
              Another feature worth mentioning tools is a ability to keep an eye
              on visitor activity. This feature can be useful once determining
              the movement of visitors and employees, it will provide the
              ability to examine buyer proposal data. Inevitably, these features
              can help companies improve organization processes and save cash.
            </p>
            <p className="auotcat mt-3">
              Some of the best on the net deal equipment can be create quickly
              and easily. They are simply secure, and is used by small , and
              medium, and enormous
              http://virtualdealdata.blog/ansarada-pricing-and-what-youll-get-for-it/
              businesses. These tools can be customized to meet the specific
              needs of any business.
            </p>
            <div className="col-sm-12 ">

              <p className="lets">Leave a Reply</p>
              <h4 className="propara mt-3 masa">
                Your email address will not be published. Required fields are
                marked *
              </h4>

              <form onSubmit={ submit}>
                <div className="row my-4">
                  <div className="col-sm-12">
                    <label className="labe">Comment *</label>
                    <textarea
                    id="comment"
                    name="comment"
                    required
                      className=""
                      style={{
                        border: "1px solid #cdd3d8",
                        padding: "6px 16px 10px",
                        width: "100%",
                      }}
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="row mt-4 ">
                  <div className="col-sm-12">
                    <div className="d-grid">
                      <label className="labe">Name *</label>
                      <input
                      id="Name"
                      name="Name"
                      required
                        placeholder=""
                        border="1px solid #cdd3d8"
                        className="input py-2"
                        padding="6px 16px"
                        width="100%"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mt-4 ">
                  <div className="col-sm-12">
                    <div className="d-grid">
                      <label className="labe">Email *</label>
                      <input
                      id="Email"
                      name="Email"
                      required
                        placeholder=""
                        border="1px solid #cdd3d8"
                        className="input py-2"
                        padding="6px 16px"
                        width="100%"
                      />
                    </div>
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-sm-12">
                    <div className="d-grid">
                      <label className="labe ">Website</label>
                      <input
                      id="website"
                      name="Website"
                      required
                        placeholder=""
                        border="1px solid #cdd3d8"
                        className="input py-2"
                        padding="6px 16px"
                        width="100%"
                      />
                    </div>
                  </div>
                </div>
              
             
                <div className="row mt-4">
                  <div className="col-sm-6">
                    <Button
                      className="button ajs"
                      border="none"
                      bg="  #ff687d"
                      color="white"
                      padding="10px"
                      width="28% "
                      type="submit"
                    >
                      POST COMMENT
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Significant;
