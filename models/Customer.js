const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create SChema
const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        require: true,
      },
      balance: {
        type: Number,
        required: true,
      },
});

module.exports = Customer = mongoose.model('Customer', CustomerSchema);