import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import { useForm } from '@formcarry/react'

const Supervision = () => {
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
          Supervision
          </h2>
        </div>
      </div>
      <div className="container mt-5 py-3">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="lets ">
            How Data Supervision Tools Can Help Your Business
            </h2>

            <p className="auotcat mt-4">
            Managing info is a vital part of operating a business. Devoid of it, you may end up with shut off strategy, disappointed employees, and unrealistic desired goals.
            </p>

            <p className="auotcat mt-3">
            Luckily, there are several data control tools ideal help you transform your life business. They can help you uncover key information, make smarter decisions, and grow your organization.
            </p>
            <p className="auotcat mt-3">
            The right info can also show potential customers what their company has to offer, and can support you in finding opportunities that may not have been noticeable before. Simply by leveraging https://taeglichedata.de/pflege-von-datenprozessen-nach-sitzungssaal the proper data, you can also improve your customer experience and raise your revenue.
            </p>
            <p className="auotcat mt-3">
            The process of integrating info can be a bit complex, with respect to the size of your organization. A simple, step-by-step approach to data integration will help you get the job done.
            </p>
            <p className="auotcat mt-3">
            A superb data administration solution will certainly not merely give you the information you need, but it will likewise help shield your data. That will allow you to make more informed decisions and enhance collaboration to departments. By using best practices, you may ensure that you will be collecting, using, and guarding your business data properly.
            </p>
            <p className="auotcat mt-3">
            If you are looking for an information management treatment, you may want to think about a tool like Talend, Reasoning Apps, or perhaps Azure Data Factory. They are designed to be user friendly, and can assist you to reduces costs of the data gathering and examination process.
            </p>
            <p className="auotcat mt-3">
            In order to determine which in turn data administration tools will be right for your business, you will 1st need to determine your organisation’s needs. Simply by working with topic experts, you can identify which will department-critical data is quite important to your business. Then, you can create rules and procedures for the different types of data you are collecting and keeping.
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

export default Supervision;
