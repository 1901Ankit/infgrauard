import React, { useState, useEffect } from "react";
import "./index.css";
import Button from "../../components/button";
import { useForm } from "@formcarry/react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const Schedule = () => {
  const options = [
    { value: "Patch Management", label: "Patch Management" },
    {
      value: "Privileged Access Management",
      label: "Privileged Access Management",
    },
    { value: "Audit & Compliance", label: "Audit & Compliance" },
    { value: "Server Administration", label: "Server Administration" },
    { value: "Multi-Account Management", label: "Multi-Account Management" },
  ];
  let navigate = useNavigate();

  const [selected, SetSelected] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);
  const [inputstate, setInputstate] = useState({
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    phone_no: "",
    message: "",
  });

  const { state, submit } = useForm({
    id: "6O96DYpHn",
  });

  if (state.submitting) {
    navigate("/thankyou");
  }
  let handleSelected = (data) => {
    let Selectedvalue = data.map((val) => {
      return val.value;
    });
    SetSelected(data);
  };

  const inputhandler = (e) => {
    const { name, value } = e.target;
    setInputstate({ ...inputstate, [name]: value });
  };

  return (
    <>
      <div className="schedule">
        <div className="overlay">
          <h2 className="animate__animated animate__rotateInUpRight maati">
            SCHEDULE A DEMO
          </h2>
        </div>
      </div>

      <div className="container-fluid py-5 my-4">
        <div className="row">
          <div className="col-sm-6 computer">
            <div
              className="kitee p-5"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <h2 className="text-white let">Revolutionize your business</h2>
              <p className="propara text-white mt-3">
                Guide me through the server and cloud management world. Schedule
                my live demo.
              </p>
            </div>
          </div>

          <div
            className="col-sm-6 px-5 mt-2 "
            data-aos="fade-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <p className="with demobook">BOOK YOUR DEMO</p>
            <h4 className="highly mt-4">
              Our team of highly skilled experts are waiting to assist you.
            </h4>

            <form onSubmit={submit}>
              <div className="row mt-5">
                <div className="col-sm-12 mt-3">
                  <div></div>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    onChange={inputhandler}
                    placeholder="First name"
                    className="modal-custom-input mb-2 ps-3"
                    style={{ width: "100%" }}
                    required
                  />
                </div>
                <div className="col-sm-12 mt-3">
                  <div></div>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    onChange={inputhandler}
                    placeholder="Last name"
                    className="modal-custom-input mb-2 ps-3"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-sm-12 mt-3">
                  <div></div>
                  <input
                    type="text"
                    required
                    name="company"
                    id="company"
                    placeholder="Company"
                    onChange={inputhandler}
                    className="modal-custom-input mb-2 ps-3"
                    padding="6px 16px"
                    width="100%"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-sm-12 mt-3">
                  <div></div>
                  <input
                    type="email"
                    name="email"
                    required
                    id="email"
                    placeholder="Email"
                    onChange={inputhandler}
                    className="modal-custom-input mb-2 ps-3"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-sm-12 mt-3">
                  <div></div>
                  <input
                    type="number"
                    name="phone_no"
                    required
                    id="phone_no"
                    placeholder="Phone Number"
                    onChange={inputhandler}
                    className="modal-custom-input mb-2 ps-3"
                    style={{ width: "100%", padding: "20px,20px" }}
                  />
                </div>
                <div className="col-sm-12 mt-3">
                  <Select
                    name="Query"
                    required
                    options={options}
                    type="text"
                    isMulti="true"
                    placeholder="Select your concern..."
                    value={selected}
                    onChange={handleSelected}
                    isSearchable={false}
                  />
                </div>
                <div className="col-sm-12 mt-3">
                  <div></div>
                  <textarea
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Message"
                    onChange={inputhandler}
                    className="modal-custom-input  ps-3"
                    style={{ width: "100%", padding: "20px,20px" }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 mt-3">
                  <Button
                    className="button"
                    border="none"
                    bg=" #ff9900"
                    color="white"
                    padding="15px"
                    width="58% "
                    type="submit"
                    name="submit"
                  >
                    LET'S TALK
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
