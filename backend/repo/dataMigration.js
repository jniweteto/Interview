const Customer = require('../models/Customer');
const Season = require('../models/Season');
const Repayment = require('../models/Repayment');
const RepaymentsUpload = require('../models/RepaymentsUpload');
const CustomerSummary = require('../models/CustomerSummary');
const fs = require('fs');

//This functon will takes data from a file and instert then in database
module.exports.saveRecords = async function (fileName){

    console.log('Data Migration');
    let file = fs.readFile(fileName, function(err, data) {
        if(err)
        console.log('Error reading the file'+err);
        //console.log(data);
      });
  
    // let data = JSON.parse(file);
    //console.log(file)

    // repaymentsUploads=data.RepaymentsUploads;
    // for(upload in repaymentsUploads)
    // RepaymentsUpload.save(upload);


    

}
