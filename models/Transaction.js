const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create SChema
const TransactionSchema = new Schema({
    from: {
        type: String,
        required: true,
      },
      to: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now(),
      },
});

module.exports = Transaction = mongoose.model('Transaction', TransactionSchema);