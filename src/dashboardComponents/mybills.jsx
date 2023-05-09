import Confirm from './mybillsconfirm'

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ActiveBills from './ActiveBills';

let allBills = [];
function mybills(){
    
    const[availableBills, setavailableBills] = useState([]);
    const[userBills, setuserBills] = useState([]);
    const[select, setSelect] = useState("");
    const[name, setName] = useState();
    const[id,setId] = useState();
    const[selectedBill, setSelectedBill] = useState("");
    const[selectedPeriod, setSelectedPeriod] = useState();
    const[selectedAmount, setSelectedAmount] = useState();

    //get usll bills
    const getAllBills = async()=>{
        await axios.get("https://api.rhonpesa.online/api/v1/get-all-bills")
        .then((response)=>{
            console.log("response all", response);
            console.log("response data:",response.data);
            setavailableBills(response.data);
            console.log("available bill:", availableBills)
        })
        .catch((error)=>console.log("error: " + error));
    }

    //get user bills
    const getUserBills = async()=>{
        const session = JSON.parse(sessionStorage.getItem('session'));
        console.log("session: " + session);
        axios.get(`https://api.rhonpesa.online/api/v1/get-merchant-bills/${session['_id']}`)
        .then((response)=>{
            console.log("user bills data:", response.data);
            setuserBills(response.data)
        })
        .catch((error)=>console.log("user bills error:", error))
    }

    useEffect(()=>{
       getAllBills();
       getUserBills();
    },[])

    const handleSelect=(e)=>{    
        console.log("events", e.target[3]);   
        const {name, value} = e.target;
        console.log("id",e.target._id)
        console.log('name', name);
        console.log('value', value);  
        console.log("options", e.target.selectedOptions[0].id);
        setId(e.target.selectedOptions[0].id);
        
       
    }

    const handleSelectedBill=()=>{
        console.log("all bills", availableBills[7]);
        const bill = availableBills.filter((item)=>item._id===id);
        console.log('bill', bill[0].amount);
        if(userBills.indexOf(bill[0].name)<0){
            setSelectedBill(bill[0].name);
            setSelectedAmount(bill[0].amount);
            setSelectedPeriod(bill[0].period);
        }
        else{
            return   
        }
        console.log("if selected", selectedBill, selectedAmount, selectedPeriod);
    }

    return (
        <div className="px-4 py-4 bg-lime-100 w-full h-full">
            <div className="py-4 border-dashed border-2 text-center text-2xl text-violet-500">
                <h2 className='py-4'><i>Worry no more, Pay your bills effortlessly</i></h2>
                <h2>Select your Bills Below</h2>
            </div>
            <div className='flex py-4 justify-between'>
                <select className='w-3/12 rounded-lg' onChange={handleSelect}>
                    <option>Select bill</option>
                    {
                        availableBills.map((item,index)=>{

                            return(
                                    <option id={item._id} name={item.name} value={item.name} key={index}>
                                        
                                            {item.name}
                                    
                                    </option>
                            )
                        })
                    }
                   
                </select>
                <div className="bg-lime-50 w-fixed h-fixed px-8 py-4">
                    <Confirm bill={selectedBill} period={selectedPeriod} amount={selectedAmount}/>
                    <div className="flex">
                        <button className="bg-green-400 py-1 px-4 hover:bg-green-500 rounded-lg mr-2">Confirm</button>
                        <button className="bg-red-400 py-1 px-4 hover:bg-red-600 rounded-lg">Cancel</button>
                    </div>
                </div>
                <button className='px-4 py-2 bg-violet-300 w-40 rounded-lg hover:bg-violet-500' onClick={handleSelectedBill}>
                    add
                </button>
            </div>
            <div className = "text-2xl bg-lime-50 px-4 py-2 rounded-lg">
                <h3>Active bills</h3>
            </div>
            {
                userBills.map((userBill)=>{
                    return(

                        <div key={userBill.bill._id}>
                            <h3 className='bg-lime-50 text-lg rounded-lg py-2 px-4 my-1'>{userBill.bill.name}</h3>
                        </div>
                    )
                })
            }
            
        </div>
    )
}
export default mybills;