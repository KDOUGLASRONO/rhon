import React from "react";
import image from '../assets/ussd.png';

import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const goToLogIn = ()=>{
    navigate('/signin');
  }
  const goToSignUp = ()=>{
    navigate('/signup');
  }
  
  return (
    <div className="w-full grid px-0 md:grid-cols-2">
      <div className="flex flex-col justify-between pl-4 py-8 rounded-br-full bg-gradient bg-blue-50">
          <div className="py-4 text-4xl text-indigo-800">
              <h2><i>Payment solution Tailored to your needs</i></h2>
          </div>
          <div className="py-2 text-2xl leading-10">
              <p > accept payments, manage your bills and 
                  access all financial services on one platform
              </p>
          </div>
          <div className="flex justify-between">
              <button className="py-2 px-2 text-white bg-violet-400 hover:bg-violet-600 rounded-lg" onClick={goToSignUp}>Get started</button>
              <button className="py-2 px-8 text-white bg-violet-300 hover:bg-violet-500 mx-4 rounded-lg" onClick={goToLogIn}>Login</button>
          </div>
      </div>
      <div className="text-center py-4 px-4 rounded-bl-full"> 
          <img src={image} className="rounded-full mx-auto my-4" alt="Tree"/>
      </div>
    </div>
  );
};

export default Hero;
