const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RepaymentsUploadSchema = Schema(
    {
        CustomerID: {type: Number, required: true},
        SeasonID: {type: Number, required:false},
        Date:{type: Date, required: true},
        Amount: {type: Number, required:true},
    }
    
);
const RepaymentsUpload = mongoose.model("RepaymentUpload", RepaymentsUploadSchema);
module.exports = RepaymentsUpload;