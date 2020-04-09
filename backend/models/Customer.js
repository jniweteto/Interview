
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CustomerSchema = Schema(
    {
        CustomerID: {type: Number, required: true, unique:true},
        CustomerName: {type: String, required: true},
    }
);
const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer;