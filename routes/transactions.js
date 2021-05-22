const express = require('express');
const router = express.Router();

//Item Model
const Transaction = require('../models/Transaction');
const Customer = require('../models/Customer');

router.get('/', async (req, res) => {
  const transactions = await Transaction.find({}).sort({ date: -1 })
  res.send(transactions)
})

router.post('/', async (req, res) => {
  const { amount, senderid, receiverid } = req.body
  try {

    const fromCustomer = await Customer.findById(senderid)
    const newFromBalance = Number(fromCustomer.balance) - Number(amount)
   Customer.updateOne({ _id: senderid }, { balance: newFromBalance }, err => {
      if (err) {
        console.log(err)
        res.status(500).send('Server Error')
      } else {
        console.log('UPDATED')
      }
    })
    
    const toCustomer = await Customer.findById(receiverid)
    const newToBalance = Number(toCustomer.balance) + Number(amount)
    Customer.updateOne({ _id: receiverid }, { balance: newToBalance }, err => {
      if (err) {
        console.log(err)
        res.status(500).send('Server Error')
      } else {
        console.log('UPDATED')
      }
    })
    const transaction = new Transaction({
      from: senderid,
      to: receiverid,
      amount: amount,
    })
    transaction.save()
    res.json(transaction)
    //res.status(200).send('Hello')
  } catch (error) {
    console.log(error)
    res.status(500).send('Server Error')
  }
})

module.exports = router;