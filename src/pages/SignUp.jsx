import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPhp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import Navigation from "../components/Navigation";
import baseUrl from "../baseUrl";

const SignUp = ({session, handleAlert, alert}) => {
  const navigate = useNavigate();
  if(session){
    navigate('/dashboard');
  }
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [id_number, setId_number] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [location, setLocation] = useState("");
  const [preload, setPreload] = useState(false);
  const [password, setPassword] = useState("");
  const [pass, setPass] = useState("");
  const [errorPassword, setErrorPassword]= useState("");
  const [passwordError, setPasswordError]= useState("");


  useEffect(()=>{
    if(pass!=password){
      setErrorPassword("passwords do not match")
    }
    else{
      setErrorPassword("");
    }
  },[pass, password])

  const signUp = () => {
    setPreload(true);
    fetch(`${baseUrl}/merchant`, {
      method: "POST",
      body: JSON.stringify({
        firstName:firstName,
        lastName:lastName,
        id_number:id_number,
        email: email,
        phone: phone,
        business_name: business,
        location: location,
        password:password
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
        console.log("response:" + reply)

      })
      .catch(err => console.log(err.message));
      setEmail("");setBusiness("");setFirstname("");setLastname("");setLocation("");setPhone("");setId_number("");
  };

  return (
    <div className=" h-fit">
      <Navigation />
      <section className="py-1  bg-slate-200 h-full ">
        <div className={alert.show? 'alert active': 'alert'}>{alert.alert}</div>
          <div className="m-auto shadow-md  mt-8 px-4 text-lg bg-violet-100 rounded-lg sm:w-8/12 md-6/12 lg:w-4/12">
            <div className="w-full">
              <div className=" text-left sm:mt-5">
                <div className="items-center w-full">
                  <h3 className="text-lg font-bold text-black leading-6 lg:text-3xl text-center">
                    Sign Up
                  </h3>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
            <div className="py-4">
              <h3 className="text-red-600"><i>{passwordError}</i></h3>
            </div>
            <div>
                <label htmlFor="email" className="">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="block w-full px-2 py-1 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="block w-full px-2 py-1 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="id_number" className="">
                  ID Number
                </label>
                <input
                  type="Number"
                  name="id_number"
                  id="id_number"
                  className="block w-full px-2 py-1 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="Enter last name"
                  value={id_number}
                  onChange={(e) => setId_number(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full px-2 py-1 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="optional"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="phone" className="">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="text"
                  className="block w-full px-2 py-1 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="business" className="">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business"
                  id="business"
                  className="block w-full px-2 py-1 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="Enter your business name"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="location" className="">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="block w-full px-2 py-1 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block w-full px-2 py-1 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  value={password}
                  onChange={(e) =>{ setPassword(e.target.value); setPasswordError("")}}
                />
              </div>
              <h3 className="text-red-600"><i>{passwordError}</i></h3>             
              <div className="text-red-600">
                {
                  errorPassword
                }
              </div>
              <div>
                <label htmlFor="confirm_password" className="">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="block w-full px-2 py-1 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  value={pass}
                  onChange={(e)=>setPass(e.target.value)}
                />
              </div>
              <div className="flex py-4 flex-col mt-4 lg:space-y-2">
                <button
                  type="button"
                  className="flex items-center justify-center w-full px-10 py-1 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-violet-600 rounded-xl hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => {
                    if(!errorPassword){
                      console.log("no error in passwords", errorPassword);
                      if(password.length < 8){
                        setPasswordError("password must be at least 8 characters")
                      }
                      else{
                        signUp();
                        setPassword("");
                        setPass("");
                      }
                    }
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
