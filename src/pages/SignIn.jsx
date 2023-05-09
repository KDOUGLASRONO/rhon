import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navigation from "../components/Navigation";

let userDetails = {};
  

const SignIn = ({session, setSession, handleAlert, alert}) => {
  console.log(alert)
  const navigate = useNavigate();
  if(session){
    navigate('/dashboard', {replace: true});
  }

  const [details, setDetails] = useState(userDetails);
  const [preload, setPreload] = useState(false);

  const  handleUserDetails = (e)=>{
    let key = e.target.name;
    let value = e.target.value;
    userDetails[key] = value;
    setDetails(userDetails);

  }

  const signIn = () => {
    setPreload(true);
    fetch("https://api.rhonpesa.online/api/v1/merchant/login", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if(res['_id']){
          sessionStorage.setItem('session', JSON.stringify(res))
          setSession(res);
          navigate('/dashboard', {replace: true});
        }else{
          handleAlert(res)
        }
        setPreload(false);
      })
      .catch(err => {
        setPreload(false)
        handleAlert('Something not right Wrong');
      })
  };

  return (
    <div className="h-screen">
      <Navigation />
      <section className="py-4  bg-slate-200 h-full">
        <div className={alert.show? 'alert active': 'alert'}>{alert.alert}</div>
        <div className="m-auto shadow-md  mt-8 py-2 px-4 text-lg bg-lime-100 rounded-lg sm:w-8/12 md-6/12 lg:w-4/12">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="py-2 text-3xl font-extrabold text-center text-bold">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="px-4 py-8 sm:px-10">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={handleUserDetails}
                      required=""
                      className="block w-full px-2 py-1 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      onChange={handleUserDetails}
                      required=""
                      className="block w-full px-2 py-1 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    className="flex items-center justify-center w-full px-10 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-violet-600 rounded-xl hover:bg-violet-700"
                    onClick={signIn}
                  >
                    {preload? "": "Sign In"} 

                    <span className={preload? 'btnPreload active': 'btnPreload'}><span className='bg-blue-600 '></span></span>
                  </button>
                  <div className="w-full h-20 flex items-center justify-center">
                    <Link to="/forgotPass">
                          <p className="text-center cursor-pointer text-violet-600 capitalize">forgot password?</p>
                    </Link>
                  </div>
                  <h1 className="mt-2 mr-3">
                    Don't have an account?{" "}
                    <Link to="/signup">
                      <span className="text-violet-700 font-bold cursor-pointer">
                        Sign Up
                      </span>
                    </Link>
                  </h1>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
