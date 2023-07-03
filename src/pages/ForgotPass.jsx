import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'
import axios from 'axios';
import baseUrl from '../baseUrl';


const ForgotPass = ({handleAlert, alert}) => {
    const [preload, setPreload] = useState(false);
    const [business_name, set_business_name] = useState("");

    const changePassword = ()=>{
        console.log("business_name", business_name);
        if(!business_name){
            console.log("Business Name Cannot Be Blank")
            return;
        }
        setPreload(true);
        axios.post(`${baseUrl}/merchant/reset-pass`,{business_name:business_name})
        .then(res => res.data)
        .then(res => {
            setPreload(false);
            handleAlert(res)
            console.log(res);
        })
        
    }

  return (
    <div>
        <Navigation />
        <section className="w-full md:w-8/12 m-auto bg-yellow-200 mt-6 rounded-lg">
            <div className="py-4 px-3 text-center">
                <h3>change changePassword</h3>
            </div>
            <div className="py-4 text-center">
                <div className="py-2 my-2">
                    <label className="text-xl w-3/4">enter your business name</label> <br/>
                </div>
                <div>
                    <input
                        type="text"
                        name="business name"
                        value ={business_name}
                        onChange={(e)=>set_business_name(e.target.value)}
                        className="px-2 py-4 h-6 rounded-lg w-3/4 "
                    />
                </div>
            </div>
            <div className='text-center py-4 text-white'>
                <button  className="py-1 w-3/4 px-2 text-center bg-violet-500 hover:bg-violet-700 rounded-lg" onClick={changePassword}>Submit</button>
            </div>
            
        </section>
     
    </div>
   
  )
}

export default ForgotPass