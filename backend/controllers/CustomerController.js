
const Customer = require('../models/Customer');


class CustomerController {

    //creating
    static async createCustomer(req, res) {

            const customer = new Customer({
                customerID: 1,
                customerName: 'Justin Niweteto',
            });
            customer.save((err) => {
                if (err) return res.status(404).send({ message: err.message });
                return res.send({ customer });
            });
    
    }

    //reading all
    static async readCustomers(req, res) {
        Customer.find({}).sort({ customerID: 'ascending' }).exec((err, customers) => {
            if (err) return res.status(404).send('Error while loading customers!');
            return res.send({ customers });
        });
    }

   
}

module.exports = CustomerController;