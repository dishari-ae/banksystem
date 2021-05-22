var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
var logger = require('morgan');
const path = require('path');
var customers = require('./routes/customers');
var transactions = require('./routes/transactions');

var app = express();
app.use(express.json());
const db=require('./config/keys').mongoURI;
mongoose
.connect(db, { useUnifiedTopology: true, useNewUrlParser: true})
.then(()=> console.log('MongoDB Connnected...'))
.catch(err=>console.log(err));

//Use Routes
app.use('/customers', customers);
app.use('/transactions', transactions);

const port=process.env.PORT || 5000;
if (process.env.NODE_ENV =="production") {
    app.use(express.static("client/build"))
}
app.listen(port, () => console.log(`Server started on PORT ${port}`));

module.exports = app;