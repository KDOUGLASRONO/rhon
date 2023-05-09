import React from 'react'
import { MdDelete } from 'react-icons/md'

const ActiveBills = ({bill, deleteActiveBill}) => {
    console.log(bill);
    return (
        <div className='flex bg-lime-50 py-1 mx-1 px-4 my-2 rounded-lg text-lg hover:bg-yellow-50 justify-between' id={bill.bill['_id']}>
            <h3>{bill.bill.name}</h3>
            <MdDelete id={bill.bill['_id']} onClick={deleteActiveBill} className='mx-8 h-8 w-8 text-red-500 hover:text-red-700'/>
        </div>
    )
}

export default ActiveBills