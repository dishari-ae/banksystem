const express = require('express');
const router = express.Router();

//Item Model
const Customer = require('../models/Customer');

router.get('/', async (req, res) => {
  const customers = await Customer.find({})
  res.send(customers)
})

router.post('/', async(req, res) => {
  const { name, email, balance } = req.body
  const customer = new Customer({
    name: name,
    email:email,
    balance: balance
  })
  customer.save()
  res.json(customer)
})

module.exports = router;