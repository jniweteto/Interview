
const CustomerSummary = require('../models/CustomerSummary');
const customer = require('../controllers/CustomerController');
const season = require('../controllers/SeasonController');

const Repayment = require('../models/Repayment');

class CustomerSummaryController {

    //creating a customer sumaary
    static async createCustomerSummary(req, res) {
        
        // this is just dummy data (as there is an interface at front end)
            const customerSummary = new CustomerSummary({
                CustomerID:1 ,
                SeasonID:110 ,
                TotalRepaid: 7900,
                TotalCredit: 7900,
            });

            repayment.save((err) => {
                if (err) return res.status(404).send({ message: err.message });
                return res.send({ customerSummary });
            });

    }

    //reading all 
    static async readCustomerSummaries(req, res) {
        CustomerSummary.find({}).sort({ CustomerID: 'ascending' }).exec((err, customerSummaries) => {
            if (err) return res.status(404).send('Error while loading customer summaries!');
            return res.send({ customerSummaries });
        });
    }

    //a function to upDate summaries and payments
    static async updateSummaries(uploads){

        uploads.forEach(upload => {
            
           
            //when the user specifies the season, create a payment specific to that season add save it
            if(upload.SeasonID) {

                var repayment = new Repayment({
                    CustomerID: upload.CustomerID,
                    SeasonID: upload.SeasonID,
                    Date: upload.Date,
                    Amount: upload.Amount
                });
                repayment.save((err) => {
                    if (err) console.log(err);
                });
                //updating the customer summary
                CustomerSummary.findOne({
                    CustomerID: upload.CustomerID,
                    SeasonID: upload.SeasonID
                }).then(summary => {
                    summary.TotalRepaid = summary.TotalRepaid + upload.Amount;
                    summary.save((err) => {
                        if (err) console.log(err);
                    });
                })
            }
            // when the user did not specify the season
            else {
                var exceed = upload.Amount;
                // sort by season id ascending and filter where totalCredit>totalRepaid
                CustomerSummary.find({CustomerID: upload.CustomerID}).then(summaries => {
                for(let i=0; i<summaries.length; i++) {
                   var summary=summaries[i];
                   
                   //when the customer doesn't have an oustanding amount for a certain seson
                   if(summary.TotalRepaid>=summary.TotalCredit){
                       break;

                   }
                   //if the amount is less than or equal to 0, no records
                   if(exceed <= 0) {
                        break;
                    }

                    //when the input amount is greater than 0
                    var sum = exceed;
                    var repayment = new Repayment({
                        CustomerID: summary.CustomerID,
                        SeasonID: summary.SeasonID,
                        Date: upload.Date,
                        Amount: exceed
                    });
                    repayment.save((err) => {
                        if (err) console.log(err);
                    });

                    // excess amount form the first season
                    var topay = summary.TotalCredit - summary.TotalRepaid; //customer owes
                    exceed = exceed - topay; //
                    if(exceed > 0) {

                        //only when it is not the last season, otherwise, the remaining amount would be applied to
                        //the last season
                        if(i!==summaries.length-1){
                            repayment = new Repayment({
                                CustomerID: summary.CustomerID,
                                SeasonID: summary.SeasonID,
                                Date: upload.Date,
                                Amount: -exceed
                            });
                            sum = sum - exceed;
                            repayment.save((err) => {
                                if (err) console.log(err);
                            });
                        }
                        
                        
                    }
                    
                    //updating summary
                    summary.TotalRepaid = summary.TotalRepaid + sum;

                    //saving summary updates in database
                    summary.save((err) => {
                        if (err) console.log(err);
                    });
                }
            })
            }
        });

    }

}

module.exports = CustomerSummaryController;