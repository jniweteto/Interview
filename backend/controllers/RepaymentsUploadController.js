
const RepaymentsUpload = require('../models/RepaymentsUpload');
const CustomerSummary = require('../models/CustomerSummary');
const CustomerSummaryController = require('../controllers/CustomerSummaryController');
var multer = require('multer');
const path = require('path')
const DataMigration = require('../repo/dataMigration');

class RepaymentsUploadController {



    //creating
    static async createRepaymentUpload(req, res) {

        // uploading a file for repayments
        try {
            if (!req.files) {
                res.send({
                    status: false,
                    message: 'No file uploaded'
                });
            } else {
                // name of the input field to retrieve the uploaded file
                let payments = req.files.payments;

                const jsoData = JSON.parse(payments.data.toString());


                //console.log(jsoData.RepaymentUploads);
                var uploads = jsoData.RepaymentUploads;

                jsoData.RepaymentUploads.forEach(element => {
                    //     console.log(element);
                    new RepaymentsUpload(element).save((err) => {
                        console.log(err)
                    });
                });
                console.log('Done');

                await CustomerSummaryController.updateSummaries(uploads);


                //Placing the uploaded file in uploads directory
                payments.mv('./uploads/' + payments.name, function (err) {
                    if (err)
                        return res.status(500).send(err);
                });


                //migrating file to database (if neccessary)
                //DataMigration.saveRecords( './uploads/' + payments.name);

                //send response after file upload
                res.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: payments.name,
                        mimetype: payments.mimetype,
                        size: payments.size
                    }
                });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }

    }

    //reading all
    static async readRepaymentsuploads(req, res) {
        RepaymentsUpload.find({}).sort({ CustomerID: 'ascending' }).exec((err, repaymentsuploads) => {
            if (err) return res.status(404).send('Error while loading repayments uploads!');
            return res.send({ repaymentsuploads });
        });
    }

}

module.exports = RepaymentsUploadController;