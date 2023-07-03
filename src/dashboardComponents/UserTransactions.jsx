import React, { useEffect, useState } from 'react'
import SingleTransaction from './SingleTransaction'
import baseUrl from '../baseUrl'

const UserTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  function getTransactions(){
    const session = JSON.parse(sessionStorage.getItem('session'));
    fetch(`${baseUrl}/merchant-transactions/${session['_id']}`)
    .then(res => res.json())
    .then(res => {
      setTransactions(res)
    })
  }

  useEffect(()=>{
    getTransactions();
  }, [])

  return (
    <section className='userTransactions bg-violet-50'>
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