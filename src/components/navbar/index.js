import { useState } from "react";
import "./index.css";
import logo from "../../assests/images/logo/Infraguard-Logo-3d.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let links = [
    {
      name: "ABOUT US",
      url: "/about-us",
    },
    {
      name: "CUSTOMERS",
      url: "/customers",
    },
    {
      name: "INDUSTRIES",
      url: "/industries",
    },

    {
      name: "PARTNERS",
      url: "/partners",
    },
    {
      name: "CASE STUDY",
      url: "/case-study",
    },
    {
      name: "VIDEOS",
      url: "/videos",
    },
    {
      name: "CONTACT US",
      url: "/contact-us",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="" style={{position:"relative"}}>
          <div className="Navbar">
            <NavLink to="/">
              <img className="logo" src={logo} alt="logo" />
            </NavLink>
            <div className={`nav-items    ${isOpen && "open"}`}>
              {links.map((val) => (
                <NavLink
                  onClick={() => setIsOpen(false)}
                  className="link"
                  to={val.url}
                >
                  {val.name}
                </NavLink>
              ))}
            </div>
            <div
              className={`nav-toggle ${isOpen && "open"}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
