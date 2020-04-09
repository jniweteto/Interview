const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RepaymentSchema = Schema(
    {
        RepaymentID: {type: Number, required: false, unique:false},
        CustomerID: {type: Number, required: true},
        SeasonID: {type: Number, required:true},
        Date:{type: Date, required:true},
        Amount: {type: Number, required:true},
        ParentID:{type: Number, required: false},
    }, 
    { timestamps: true }
);
const Repayment = mongoose.model("Repayment", RepaymentSchema);
module.exports = Repayment;