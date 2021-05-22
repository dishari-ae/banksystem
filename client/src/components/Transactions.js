import React, { useContext, useEffect } from 'react';
import globalContext from '../context/globalContext';

const Transactions = () => {
  const { transactions, getTransactions, loading } = useContext(globalContext)
  useEffect(() => {
    getTransactions()
  }, [])
  const formatDate = date => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
    }
    return new Date(date).toLocaleString('en-US', options)
  }
  return (
    <div className='transactionContainer'>
      {loading && <h2 className='loading'>loading ...</h2>}
      {!loading && (
        <table>
          <thead>
            <tr className='transaction'>
              <th className='TAmount'>AMOUNT</th>
              <th className='TDate'>DATE</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map(transaction => (
              <tr key={transaction._id} className='transaction'>
                <td className='TAmount'>{transaction.amount}</td>
                <td className='TDate'>{formatDate(transaction.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Transactions;