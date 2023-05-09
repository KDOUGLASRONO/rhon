import React from 'react'

const SingleTransaction = ({total, transaction}) => {
  const convertTime = (time)=>{
    const date = new Date(time);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDate = date.toLocaleString('en-US', options);
    return formattedDate
  }
  
  return (
    <tr>
      <td>{transaction['customer_phone']}</td>
      <td>{transaction['transaction_code']}</td>
      <td>{transaction['transaction_type']}</td>
      <td>{transaction['amount']}</td>
      <td>{convertTime(transaction['createdAt'])}</td>
    </tr>
  )
}

export default SingleTransaction