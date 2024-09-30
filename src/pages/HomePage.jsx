import React from "react";
import HomeSlider from "../components/home/HomeSlider";
import About from "../components/home/About";
// import SecondSlider from '../components/home/SecondSlider'
import Awards from "../components/home/Awards";
// import CorporateSocial from '../components/home/CorporateSocial'
import CSR from "../components/home/CorporateSocial";
import Service from "../components/home/Service";
import CardSlider from "../components/home/CardSlider";
import Customers from "../components/home/Customers";

const HomePage = () => {
  return (
    <div className="homepage">
      <div>
        <HomeSlider />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Customers />
      </div>
      <div>
        <Awards />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <CSR />
      </div>
      <div>
        <CardSlider />
      </div>
    </div>
  );
};

export default HomePage;
