import React from "react";
import "./css/style.css";
import Navbar from "./Components/navbar";
import SectionOne from "./Components/sectionOne";
import SectionTwo from "./Components/sectionTwo";
import SectionThree from "./Components/sectionThree";
import SectionFour from "./Components/sectionFour";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}

export default App;
