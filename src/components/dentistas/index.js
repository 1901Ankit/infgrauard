import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import { useForm } from '@formcarry/react'

const Dentistas = () => {
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
          Dentistas
          </h2>
        </div>
      </div>
      <div className="container mt-5 py-3">
        <div className="row ">
          <div className="col-sm-12">
            <h2 className="lets ">
            Dentistas En This town
            </h2>

            <p className="auotcat mt-4">
            Located in Madrid’s center, the dental hospital of Clinica Tooth Velazquez presents a wide range of dental services. The staff with this practice uses the latest technology and the top quality materials to have the patient the best dental care. Additionally, it offers free of charge diagnostics and treatment strategies.
            </p>

            <p className="auotcat mt-3">
            The medical clinic offers a number of procedures, which includes teeth brightening, crowns, veneers, implants, bruxism treatment and more. They are really well known with regard to their facilities and technology. The dentists around this clinic are prepared and experienced.
            </p>
            <p className="auotcat mt-3">
            The oral clinic of Nuestra respuesta dental practices all standard protocols which is authorized to perform all dental treatments. They have all required permits, authorizations and environmental regulations. These sheets a free initial visit for people to identify caries and other problems.
            </p>
            <p className="auotcat mt-3">
            The clinic of Clinica Navarro specializes in oral health and offers a range of treatments. Their staff is extremely trained and is also committed to a a comprehensive approach. There is a dedicated staff of authorities who can manage any oral problem.
            </p>
            <p className="auotcat mt-3">
            The dentists for Ferrus & Bratos experience extensive experience in their area. The doctors include completed 3 years of professionals in dentistry and are devoted to investing an overall total of 1. 000 hours to train annually. They take into account the financial conditions of their patients over here to supply them with the best rate of dental care.
            </p>
            <p className="auotcat mt-3">
            The staff in the dental center of Rojas Villa odontologos has been in business for more than three decades. They specialize in ortodoncia and have adaptable payment alternatives. Their individuals can obtain free services and all necessary authorizations are provided.
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

export default Dentistas;
