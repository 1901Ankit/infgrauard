import React from "react";
import Button from "../../components/button";
import clone from "../../assests/images/photo/footer-img-1.png";

const Demo = () => {
  return (
    <>
      <div className="container bg-white">
        <div className="row">
          <div className="col-sm-5 mt-4">
            <img src={clone} className="clone" />
          </div>
          <div className="col-sm-6 start px-4">
            <h2 className="rdy mt-5 p3-4">READY TO START?</h2>
            <p className="trial">Contact our team for demo and free trial.</p>
            <Button
              bg="#ef687d"
              border="2px solid #ef687d"
              color="#ffffff"
              padding="8px"
              width="200px"
              className="button my-3"
            >
              SCHEDULE A DEMO
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
