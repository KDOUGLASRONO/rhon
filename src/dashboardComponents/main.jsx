import React, {useState} from 'react'
import Details from './details'
import Bills from './bills'
import Withdraw from './Withdraw'
import Savings from './Savings'
import Mybills from './mybills'
import UserTransactions from './UserTransactions'
import { Route, Routes } from 'react-router-dom'

const main = ({userInfo}) => {
  const [alert, setAlert] = useState({alert: "alert", show: false});

  const handleAlert = (message)=>{
    setAlert({alert: message, show: true});
    setTimeout(()=>{
      setAlert({alert: '', show: false});
    }, 5000);
  }
  
  return (
    <section className='mainSection w-full h-full'>
      <div className={alert.show? 'alert active': 'alert'}>{alert.alert}</div>
      <Routes>
        <Route path='/Details' element={<Details userInfo={userInfo}/>}/>
        <Route path='/Bills' element={<Bills handleAlert={handleAlert} userInfo={userInfo}/>}/>
        <Route path='/Withdraw' element={<Withdraw  handleAlert={handleAlert} userInfo={userInfo}/>}/>
        <Route path='/Savings' element={<Savings userInfo={userInfo}/>} />
        <Route path='/Transactions' element={<UserTransactions />} />
        <Route path='/mybills' element={<Mybills/>}/>
      </Routes>
    </section>
  
  )
}

export default main