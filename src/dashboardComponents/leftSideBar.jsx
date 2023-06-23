import React from 'react'
import { Link } from "react-router-dom"
import {FcViewDetails} from 'react-icons/fc'
import {FaMoneyBillAlt} from 'react-icons/fa'
import {GiReceiveMoney} from 'react-icons/gi'
import {MdSavings} from 'react-icons/md'
import {HiArrowsRightLeft} from 'react-icons/hi2'
import {useState} from 'react';

const leftSideBar = ({activePage, setActivePage, handleActivePage}) => {

  const [nav, setNav] = useState(false);

  const navigateLink = (e)=>{
    let id = e.target.id;
    if(!id){
      id = e.target.parentElement.id;
    }
    // change the url to current active page
    setActivePage(id);
    handleActivePage(id)
  }

  return (
        <div className="grid grid-cols-3 h-full md:flex-cols-1 md:w-full md:px-4 py-2 text-violet-300 md:block">
          <div className={`flex h-fit md:my-2 cursor-pointer w-fit md:w-full px-2 bg-stone-600 hover:bg-stone-800 py-2 rounded-lg ${activePage === 'Details'?'bg-violet-400':'links'}`} id='Details' onClick={navigateLink}>
              <img src="https://img.icons8.com/windows/32/null/bulleted-list.png" className="mr-4 h-6 w-6"/>
              <h3 className="text-white font-bold">Details</h3>
          </div>
          <div className={` flex h-fit md:my-2 cursor-pointer w-fit md:w-full px-2 bg-stone-600 hover:bg-stone-800 py-2 rounded-lg ${activePage === 'Bills'?'bg-violet-400':'links'}`} id='Bills' onClick={navigateLink}>
              <img src="https://img.icons8.com/ios/50/null/refund-2.png" className="mr-4 h-6 w-6"/>
              <h3 className='text-white font-bold'>Bills</h3>
          </div> 
          <div className={`flex h-fit md:my-2 md:w-full cursor-pointer w-fit px-2 py-2 bg-stone-600 hover:bg-stone-800 rounded-lg ${activePage === 'Withdraw'?'bg-violet-400':'links'}`} id='Withdraw' onClick={navigateLink}>
              <img src="https://img.icons8.com/ios/50/null/refund-2.png" className="mr-4 h-6 w-6"/>
              <h3 className='text-white font-bold'>Withdraw</h3>
          </div> 
          <div className={` flex h-fit md:my-2 md:w-full cursor-pointer w-fit px-2 py-2 bg-stone-600 hover:bg-stone-800 rounded-lg ${activePage === 'Savings'?'bg-violet-400':'links'}`} id='Savings' onClick={navigateLink}>
              <img src="https://img.icons8.com/ios/50/null/get-cash--v1.png" className="mr-4 h-6 w-6"/>
              <h3 className='text-white font-bold'>Saving</h3>
          </div>
          <div className={` flex h-fit md:my-2 md:w-full cursor-pointer w-fit px-2 py-2 bg-stone-600 hover:bg-stone-800 rounded-lg ${activePage === 'Transactions'?'bg-violet-400':'links'}`} id='Transactions' onClick={navigateLink}>
              <img src="https://img.icons8.com/ios/50/null/refund-2.png" className="mr-4 h-6 w-6"/>
              <h3 className='text-white font-bold'>Transactions</h3>
          </div>
          {/*
          <Link to="/dashboard/mybills">
            <h3>my Bills</h3>
          </Link> 
  */}
        </div> 
  )
}

export default leftSideBar;