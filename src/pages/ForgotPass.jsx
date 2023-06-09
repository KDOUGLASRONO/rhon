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
        fetch('http://localhost:4444/api/v1/merchant/reset-pass', {
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
                        onChange={handleBusinessName}
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