import React, {useEffect, useState}from 'react'
import baseUrl from '../baseUrl';

const Withdraw = ({userInfo, handleAlert}) => {
  const [amount, setAmount] = useState(0);
  const [session, setSession] = useState({});
  const [phone, setPhone] = useState('');
  const [preload, setPreload] = useState(false);

  const initiatePreload = ()=>{
    setPreload(true)
  }
  const removePreload = ()=>{
    setPreload(false);
  }

  useEffect(()=>{
    getSession();

  }, [])

  function getSession(){
    let session = JSON.parse(sessionStorage.getItem('session'))
    setSession(session);
    setPhone(session.phone);
  }

  console.log(session);
  const handleSetAmount = (e)=>{
    let value = e.target.value;
    if(value == ""){
      setAmount(0);
    }else{
      setAmount(e.target.value);
    }
    
  }

  const handleSetPhone = (e)=>{
    const value = e.target.value;
    setPhone(value);
  }

  const handleWithdrawal = ()=>{
    if(amount === 0){
      handleAlert("Amount Can't be Zero");
      return;
    }

    let alert = confirm(`Confirm you want to withdraw ksh ${amount}`);
    if(!alert){
      return;
    }
    setPreload(true);
    fetch(`${baseUrl}/withdraw`, {
      method: 'POST',
      body:JSON.stringify({
          "amount": amount,
          "merchant_account": session['account_number'],
          "initiator_phone": session['phone'],
          "pay_to": phone
      }),
      headers: {
        "Content-Type": "Application/Json",
        "Authorization": "bearer"
      }
    })
    .then(res => res.json())
    .then(res => {
      setPreload(false);
      handleAlert(res);
      console.log("response withdrawal",res);
    })
  }

  return (
    <section className='w-full h-full bg-violet-50 text-center py-8'>
      <div className='w-full border-dashed border-2 py-4 px-8 m-auto first:text-2xl'>
        <h3 className="py-2 font-black">Account Balance</h3> 
        <h3 className="text-4xl text-violet-900 font-bold my-4"> ksh <span className=''>{userInfo.balance < 0? "0": userInfo.balance}</span></h3>
        <input type="number" placeholder='Enter Amount' onKeyUp={handleSetAmount} className='border-dashed border-2 px-2 py-1'/>
        <div className='border-dashed border-1 my-4'>
          <h3 className='my-4'>Pay To: </h3>
          <input 
            type="number" 
            placeholder='pay to' 
            value={session.phone}
            defaultValue={session.phone} onKeyUp={handleSetPhone}
            className='px-2 py-1'
            />
        </div>
        <button type='button' onClick={handleWithdrawal} className='py-2 px-4 w-full text-white bg-stone-600 hover:bg-stone-800 rounded-lg'>
          {preload? '': 'Withdraw'}<span className={preload? 'btnPreload active': 'btnPreload'}><span className='bg-green-500 '></span></span>
        </button>
      </div>
    </section>
  )
}

export default Withdraw;