
const Repayment = require('../models/Repayment');
const customer = require('../controllers/CustomerController');
const season = require('../controllers/SeasonController');
const readRepaymentsupload = require('../controllers/RepaymentsUploadController');

class RepaymentController {

    //creating 
    // static async createRepayment(req, res) {
    //      {
    //         const repayment = new Repayment({
    //             repaymentID: 1,
    //             customerID: customer.customerID,
    //             seasonID: season.seasonID,
    //             date:'',
    //             amount: readRepaymentsupload.amount,
    //             parentID:''});

    //             repayment.save((err) => {
    //             if (err) return res.status(404).send({ message: err.message });
    //             return res.send({ repayment });
    //         });
    //     }


    // }

    //reading all 
    static async readRepayments(req, res) {
        Repayment.find({}).sort({ CustomerID: 'ascending' }).exec((err, repayments) => {
            if (err) return res.status(404).send('Error while loading repayments!');
            return res.send({ repayments });
        });
    }

}

module.exports = RepaymentController;