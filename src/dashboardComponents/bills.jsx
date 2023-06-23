import React, { useEffect, useState } from 'react'
import SingleSelectedBill from './SingleSelectedBill';
import ActiveBills from './ActiveBills';
import AvailableBills from './AvailableBills';

let selectedBills = [];
let userBills = [];
const bills = ({handleAlert, userInfo}) => {
  const [bills, setBills] = useState(selectedBills);
  const [activeBills, setActiveBills] = useState([]);
  const [availableBills, setAvailableBills] = useState(userBills);
  const [value, setValue] = useState('');
  const [billId, setBillId] = useState('');
  const [activeBillSection, setActiveBillSection] = useState(true);

  function getAllBills(){
    fetch("http://localhost:4444/api/v1/get-all-bills")
    .then(res => res.json())
    .then(res => {
      setAvailableBills(res);
    })
  }

  function getUserActiveBIlls(){
    const session = JSON.parse(sessionStorage.getItem('session'));
    console.log("session:", session['_id'])
    fetch(`http://localhost:4444/api/v1/get-merchant-bills/${session['_id']}`)
    .then(res => res.json())
    .then(res => {
      console.log("res:",res)
      setActiveBills(res);
    })
  }

  useEffect(()=>{
    getAllBills();
    getUserActiveBIlls();
  }, [])

  const handleSetBills = ()=>{
     if(value){
      let num = 0;

      const selectedBill = availableBills.filter(bill =>{
          return bill['_id'] === billId;
      })

      // check if the bill exists in the bill array
      bills.forEach((bill)=>{
        if(bill.value === value){
          num++;
        }
      })

      if(!num){
        setBills([selectedBill[0]]);
        setActiveBillSection(false);
      }

     }
  }

  const handleBillValue = (e)=>{
    setValue(e.target.value)
    setBillId(e.target.selectedOptions[0].id);
  }

  const deleteBill = (e)=>{
    let billId = e.target.id;
    if(!billId){
      billId = e.target.parentElement.id;
    }
    const filteredBills = bills.filter((bill) => {
      return bill['_id'] !== billId;
    })
    setBills(filteredBills);
  }

  const deleteActiveBill = (e)=>{
    let billId = e.target.id;
    if(!billId){
      billId = e.target.parentElement.id;
    }
    const filteredBills = activeBills.filter((bill) => {
      return bill.bill['_id'] !== billId;
    })

    let billname = activeBills.filter((bill)=>{
      if(bill.bill['_id'] == billId){
        return bill.bill.name;
      }
    })
    
    const response = confirm(`Are you sure you want to delete ${billname[0].bill.name}?`);
    if(response){
      handleAlert('bill deleted');
      setActiveBills(filteredBills);
    }
  
  }


  const handleActiveBillSection = (e)=>{
    if(e.target.id === "activeBill"){
      setActiveBillSection(true)

    }
    else{
      setActiveBillSection(false);
    }
  }

  const addBill = ()=>{
    const session = JSON.parse(sessionStorage.getItem('session')); 
    fetch('http://localhost:4444/api/v1/add-merchant-bill', {
      method: 'POST',
      body: JSON.stringify(
        {
          "merchant_id": session['_id'],
          "bill_id": bills[0]['_id'],
          "start_date":(value !== "NHIF")?new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1):"",
        }
      ),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      getUserActiveBIlls();
      setActiveBillSection(true);
      setBills([]);
      if(typeof(res) == 'string'){
        handleAlert(res)
      }
      else{
        handleAlert('Bill Added Successfully');
      }
    })
  }


  return (
    <section className="w-full bg-violet-50 h-full">
    <div className='border-dashed border-2 w-full px-4 py-4 text-2xl'>
      <p className='accountAmount'>Account Balance: Ksh <span className='accountBalance'>{userInfo.balance < 0 ? "0" : userInfo.balance}</span></p>
      <h2>Lipa Bills bila Stress</h2>
    </div>
    <div className='flex justify-between border-dashed border-2 w-full px-4 py-4 text-lg'>
      <select className="bg-white px-2 rounded-lg" name="billName" id="" defaultValue='Default' onChange={handleBillValue}>
        <option selected disabled value='Default'>Select your bills..</option>
        {availableBills.map((singleBill)=>{
          return <AvailableBills key={singleBill._id} billId={billId} singleBill={singleBill}/>
        })}
      </select>
      <button className='py-2 px-16  bg-violet-400 hover:bg-violet-600 text-white rounded-lg' onClick={handleSetBills}>Add</button>
    </div>

    <div className='billsContainer'>
      {/* Display Selected Bills */}
      <div className='bg-slate-300'>
        <div className={activeBillSection? 'listBills' : 'listBills active'}>
          {
            bills.map((bill)=>{
              return <SingleSelectedBill bill={bill} id={bill.id} deleteBill={deleteBill} addBill={addBill}/>
            })
          }            
        </div>
        
      </div>
      {/* Display Active Bills */}
      <div className="mt-2 px-4">
        <h2 id='activeBill'className="text-xl bg-violet-200 py-1 rounded-lg px-4 text-bold w-fit" onClick={handleActiveBillSection}>Active Bills</h2>
        <div className={activeBillSection? 'listBills active' : 'listBills'}>
          {
            activeBills.map((singleBill)=>{
              return <ActiveBills key={singleBill['_id']} bill={singleBill} deleteActiveBill={deleteActiveBill}/>
            })
          }
          {activeBills.length? "": '' || <p className='noBills'>No Active Bills</p>}
        </div>
      </div>
    </div>
  </section >
  )
}

export default bills