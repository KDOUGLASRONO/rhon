import React, { useEffect, useState } from 'react'
import SingleTransaction from './SingleTransaction'

const UserTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  function getTransactions(){
    const session = JSON.parse(sessionStorage.getItem('session'));
    fetch(`https://api.rhonpesa.online/api/v1/merchant-transactions/${session['_id']}`)
    .then(res => res.json())
    .then(res => {
      setTransactions(res)
    })
  }

  useEffect(()=>{
    getTransactions();
  }, [])

  return (
    <section className='userTransactions bg-lime-100'>
      <h2 className='tittle'>Transactions</h2>
      <div className='viewTransactions'>
        <table>
          <thead>
            <tr>
              <th>Phone</th>
              <th>Transaction Code</th>
              <th>Transaction Type</th>
              <th>Amount</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              transactions.data && transactions.data.map((transaction)=>{
                return <SingleTransaction key={transaction['_id']} total={transactions.total} transaction={transaction}/>
              })
            }
          </tbody>
        </table>
         
      </div>
    </section>
  )
}

export default UserTransactions