import React from 'react'
import {MdDelete} from 'react-icons/md'

const SingleSelectedBill = ({bill, deleteBill, addBill}) => {
    const calculateDailyDeductions = () =>{
      if(bill.period == "Yearly"){
        if(bill.name == 'NHIF'){
          return 20;
        }else{
          return Math.ceil(bill.amount / 365);
        }
      }else{
        if(bill.name == 'NHIF'){
          return 20;
        }
        else{
          return Math.ceil(bill.amount / 30);
        }
      }
    }
    return (
      <div className='fixed inset-0 bg-black bg-opacity-30 flex' id={bill['_id']} onClick={deleteBill}>
        <div className='bg-yellow-100 w-fit h-fit m-auto px-4 py-4 rounded-lg' id={bill.id}>
            <h2 className='text-center py-4 font-bold'>Bill: {bill.name}</h2>
            <div className='mb-6'>
              <div className="flex justify-between py-1">
                <p>Amount:</p>
                <h3>{bill.amount}</h3>
              </div>
              <div className="flex justify-between py-1">
                <p>Period:</p>
                <h3>{bill.period}</h3>
              </div>
              <div className="flex justify-between py-1">
                <p>Daily deduction:</p>
                <h3>{calculateDailyDeductions()}</h3>
              </div>
            </div>
            <div className="flex justify-between">
              <div className='px-4 py-2 bg-red-300 hover:bg-red-500 rounded mr-6'>
                <MdDelete id={bill['_id']} className='deleteBill' onClick={deleteBill}/>
              </div>        
              <button onClick={addBill} className='py-1 px-4 bg-green-300 hover:bg-green-400 rounded'>Confirm</button>
            </div>
        </div>
      </div>
  )
}

export default SingleSelectedBill