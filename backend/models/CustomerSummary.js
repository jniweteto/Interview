const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CustomerSummarySchema = Schema(
    {
        CustomerID: {type: Number, required: true},
        SeasonID: {type: Number, required: true},
        TotalRepaid: {type: Number, required: true},
        TotalCredit: {type: Number, required: true},
    }
);
const CustomerSummary = mongoose.model("CustomerSummary", CustomerSummarySchema);
module.exports = CustomerSummary;