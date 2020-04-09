const express = require('express');
const CustomerController = require('../controllers/CustomerController');
const SeasonController = require('../controllers/SeasonController');
const CustomerSummaryController = require('../controllers/CustomerSummaryController');
const RepaymentController = require('../controllers/RepaymentController');
const RepaymentsUploadController = require('../controllers/RepaymentsUploadController');

const route = new express.Router();

/*Designing APIs for customer summaries, repayments uploading and repayments records */

//reading all customer summaries. This API will be used on frontend
route.get('/customer/summary', CustomerSummaryController.readCustomerSummaries);
//uploading repayments from the web interface
route.post('/repayments/upload', RepaymentsUploadController.createRepaymentUpload);
//reading all customer summaries. This API will be used on frontend
route.get('/repayments/records', RepaymentController.readRepayments);

module.exports=route;