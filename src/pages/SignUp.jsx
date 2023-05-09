import React, { useState } from "react";
import { FaPhp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import Navigation from "../components/Navigation";

const SignUp = ({session, handleAlert, alert}) => {
  const navigate = useNavigate();
  if(session){
    navigate('/dashboard');
  }
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [preload, setPreload] = useState(false);



  const signUp = () => {
    setPreload(true);
    fetch("https://api.rhonpesa.online/api/v1/merchant", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        phone: phone,
        business_name: business,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((reply) => {
        if(typeof(reply) === "string"){
          handleAlert(reply)
        }else{
          handleAlert(reply.message)
        }
        setPreload(false);

      })
      .catch(err => console.log(err.message));
  };

  return (
    <div className=" h-screen">
      <Navigation />
      <section className="py-4  bg-slate-200 h-full ">
        <div className={alert.show? 'alert active': 'alert'}>{alert.alert}</div>
          <div className="m-auto shadow-md  mt-8 py-2 px-4 text-lg bg-lime-100 rounded-lg sm:w-8/12 md-6/12 lg:w-4/12">
            <div className="w-full">
              <div className=" text-left sm:mt-5">
                <div className="items-center w-full">
                  <h3 className="text-lg font-bold text-black leading-6 lg:text-3xl text-center">
                    Sign Up
                  </h3>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="text"
                  className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="business" className="sr-only">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business"
                  id="business"
                  className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="Enter your business name"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                />
              </div>
              <div className="flex py-4 flex-col mt-4 lg:space-y-2">
                <button
                  type="button"
                  className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-violet-600 rounded-xl hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => {
                    signUp();
                  }}
                >
                  {preload? "": "Sign Up"} 

                  <span className={preload? 'btnPreload active': 'btnPreload'}><span className='bg-blue-600 '></span></span>

                </button>
                <h1 className="mt-3 mr-3 py-6">
                  Already have an account?{" "}
                  <Link to="/signin">
                    <span className="text-violet-600 font-bold cursor-pointer">
                      Sign In
                    </span>
                  </Link>
                </h1>
              </div>
            </div>
          </div>            
      </section>
    </div>
  );
};

export default SignUp;
