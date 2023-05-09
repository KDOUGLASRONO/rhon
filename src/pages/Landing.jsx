import React from "react";

import Navbar from '../components/navbar';
import Hero from "../components/Hero";
import Statisctics from "../components/Statisctics";
import Management from "../components/Management";
// import Master from "../components/Master";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Landing = ({session}) => {

  const navigate = useNavigate();
  if(session){
    navigate('/dashboard', {replace: true});
  }
  
  return (
    <div>
      <Navbar/>
      <Hero />
      <Management />
      <Statisctics />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Landing;
