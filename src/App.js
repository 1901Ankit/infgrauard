import React, { useEffect } from "react";
import Router from "./Router";
import Navbar from "./components/navbar";
import './App.css'
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Router />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
  