import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'


const ForgotPass = ({handleAlert, alert}) => {
    const [preload, setPreload] = useState(false);
    const [business_name, set_business_name] = useState("");
    
    const handleBusinessName = (e)=>{
        const value = e.target.value;
        if(value){
            set_business_name(value);
        }
    }

    const changePassword = ()=>{
        if(!business_name){
            handleAlert("Business Name Cannot Be Blank")
            return;
        }
        setPreload(true);
        fetch('https://api.rhonpesa.online/api/v1/merchant/reset-pass', {
            method: "POST",
            body: JSON.stringify({
                "business_name": business_name
            }),
            headers: {
                "Contents-Type": "Application/Json"
            }
        })
        .then(res => res.json())
        .then(res => {
            setPreload(false);
            handleAlert(res)
            console.log(res);
        })
        
    }

  return (
    <div>
    <Navigation />
    <section className="logIn">
      <div className={alert.show? 'alert active': 'alert'}>{alert.alert}</div>
      <div className="flex flex-col justify-center min- py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-3xl font-extrabold text-center text-neutral-600">
            Reset Your Password
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="business_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Your Business Name
                </label>
                <div className="mt-1">
                  <input
                    id="business_name"
                    name="business_name"
                    type="business_name"
                    onChange={handleBusinessName}
                    required
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  />
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={changePassword}
                  className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    {preload? "": "Reset Password"} 

                    <span className={preload? 'btnPreload active': 'btnPreload'}><span className='bg-blue-600 '></span></span>

                </button>
                <div className="w-full h-20 flex items-center justify-center">
                </div>
                <h1 className="mt-3 mr-3 capitalize">
                 or go back to {" "}
                  <Link to="/signin">
                    <span className="text-blue-700 font-bold cursor-pointer">
                      Sign In
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
   
  )
}

export default ForgotPass