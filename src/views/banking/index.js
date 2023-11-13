import React from "react";
import "./index.css";


const Banking = () => {
  return (
    <>
     <div className="contact">
        <div className="overlay">
          <h2 className="animate__animated animate__rotateInUpRight maati finch">
            Banking and Financial Services
          </h2>
        </div>
      </div>
      <div className="container mt-5 pt-2">
        <div className="row">
          <div className="col-sm-3 mt-5">
            <div
              className="contactus_parallax3 shadow p-0 "
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
          </div>

          <div className="col-sm-9 mt-5 inftr">
            <div className="px-5 featt">
              <h2 className="rdy toge">WHY PARTNER WITH INFRAGUARD?</h2>
              <div className="">
                <h3 className="toge mt-4">
                  Together we will manage your servers, security and compliance
                </h3>
                <div className="mt-4">
                  <p className="bank">
                    Banking and Financial services are no strangers to
                    cybersecurity threats and attacks. The sector is most
                    favourite to hackers due to its literal and figurative
                    wealth of information, with valuable data ranging from
                    employee login credentials to tax filing details to credit
                    card and debit card details to personal details such as
                    addresses, phone numbers, birthdays and government ID
                    details.
                  </p>
                  <p className="bank">
                    Banks are often targeted hard irrespective of their market
                    size. Even smaller financial (FinServ) businesses are not
                    spared from cyber attacks and can suffer devastating
                    consequences. Almost, every year financial companies suffer
                    losses due to data breach.
                  </p>
                  <p className="bank">
                    All the above points bring out the challenging picture of
                    financial services and these can be well managed by
                    Infraguard’s Patch Management and Access Management. All
                    banking software requires common set of actions such as
                    Patch/Update Management, Backup Management, Access and Log
                    Management.
                  </p>
                  <p className="bank">
                    Infraguard created the centralised patch policies for the
                    client by building Center of Excellence (CoE) that were
                    divided into regular scans and patch install actions. At
                    specified schedules, the client servers were scanned for
                    pending updates and reports were added to the ticketing
                    system. After client’s approval on set of patches, policies
                    were installed. Then Patch Updates happens at designated
                    time and reports were again sent to the ticketing system.
                    All these activities can be monitored and tracked by the
                    Patch Maintenance team during its progress.
                  </p>
                  <p className="bank">
                    Backup policies were also created for the clients for both
                    pre- and post-installation of patches. Log and Access
                    Management is another area of concern for financial sectors.
                    It is very critical for the financial industry for the
                    access to be regulated and monitored on daily basis. Every
                    action taken from Infraguard is logged for review. These
                    types of loggings are done on both user as well as server
                    level. With all the above-mentioned activities, security and
                    compliance of our Banking client was managed and data breach
                    was avoided.
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

export default Banking;
