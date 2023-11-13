import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../views/home";
import About from "../views/about";
import Customer from "../views/customer";
import Casestudy from "../views/casestudy";
import Contact from "../views/contact";
import Partner from "../views/partner";
import Video from "../views/videos";
import Industrie from "../views/industry";
import Demo from "../components/demo";
import Footer from "../components/footer";
import Banking from "../views/banking";
import Telecommunication from "../views/telecom";
import Managed from "../views/managed";
import Schedule from "../views/schedule";
import BLAZECLAN from "../views/blaze";
import Axcess from "../views/axcess";
import Kulzia from "../views/kulzia";
import TGA from "../views/tga";
import Kulmos from "../views/kulmos";
import Runon from "../views/runon";
import FeatureCard from "../components/featureCard";
import Blog from "../components/blog/blog";
import Resource from "../components/resource";
import Uncategorized from "../components/uncategorized";
import Significant from "../components/signfeature";
import Dentistas from "../components/dentistas";
import Supervision from "../components/supervisn";
import Microblogs from "../components/microblog";
import Service from "../components/service";
import Terms from "../components/terms";
import Privacy from "../components/privacy";
import Dataprivacy from "../components/dataprivacy";
import Thankyou from "../components/thnq";


const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/"element={<Home />} />
        <Route exact path="/ABOUT-US"element={<About/>} />
        <Route exact path="/CUSTOMERS"element={<Customer/>} />
        <Route exact path="/INDUSTRIES"element={<Industrie/>} />
        <Route exact path="/PARTNERS"element={<Partner/>} />
        <Route exact path="/CASE-STUDY"element={<Casestudy/>} />
        <Route exact path="/VIDEOS"element={<Video/>} />
        <Route exact path="/CONTACT-US"element={<Contact/>} />
        <Route exact path="/banking" element={<Banking/>}/>
        <Route exact path="/telecom" element={<Telecommunication/>}/>
        <Route exact path="/managed" element={<Managed/>}/>
        <Route exact path="/schedule" element={<Schedule/>}/>
        <Route exact path="/blaze" element={<BLAZECLAN/>}/>
        <Route exact path="/axcess" element={<Axcess/>}/>
        <Route exact path="/kulzia" element={<Kulzia/>}/>
        <Route exact path="/tga" element={<TGA/>}/>
        <Route exact path="/kulmos" element={<Kulmos/>}/>
        <Route exact path="/runon" element={<Runon/>}/>
        <Route exact path="/blog" element={<Blog/>}/>
        <Route exact path="/uncategorized" element={<Uncategorized/>}/>
        <Route exact path="/resource" element={<Resource/>}/>
        <Route exact path="/signfeature" element={<Significant/>}/>
        <Route exact path="/dentistas" element={<Dentistas/>}/>
        <Route exact path="/supervisn" element={<Supervision/>}/>
        <Route exact path="/microblog" element={<Microblogs/>}/>
        <Route exact path="/service" element={<Service/>}/>
        <Route exact path="/terms" element={<Terms/>}/>
        <Route exact path="/privacy" element={<Privacy/>}/>
        <Route exact path="/dataprivacy" element={<Dataprivacy/>}/>
        <Route exact path="/thankyou" element={<Thankyou/>}/>
       
   
      </Routes>
  
      <FeatureCard/>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
