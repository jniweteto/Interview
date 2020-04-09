const db= require('./configs/database')
const CustomerSummaryController = require('./controllers/CustomerSummaryController');
const CustomerSummary = require('./models/CustomerSummary');
const Customer = require('./models/Customer');
const Season = require('./models/Season');
const RepaymentsUpload = require('./models/RepaymentsUpload');

db(async () => {
    const customer = new Customer({
        CustomerID: 1,
        CustomerName: 'Justin Niweteto',
    });
    customer.save((err) => {
        if (err) console.log(err);
    });
    var season = new Season({
        SeasonID: 2011,
        SeasonName: '2011, Short Rain',
        StartDate: '8/1/2011',
        EndDate:'0'});

    season.save((err) => {
        if (err) console.log(err);
    });
    season = new Season({
        SeasonID: 2012,
        SeasonName: '2012, Short Rain',
        StartDate: '8/1/2012',
        EndDate:'0'});

    season.save((err) => {
        if (err) console.log(err);
    });
    var customerSummary = new CustomerSummary({
        CustomerID:1 ,
        SeasonID:2011 ,
        TotalRepaid: 80,
        TotalCredit: 100,
    });
    customerSummary.save((err) => {
        if (err) console.log(err);
    });
    customerSummary = new CustomerSummary({
        CustomerID:1 ,
        SeasonID:2012 ,
        TotalRepaid: 30,
        TotalCredit: 120,
    });
    customerSummary.save((err) => {
        if (err) console.log(err);
    });
    const repaymentupload = new RepaymentsUpload({
        CustomerID: 1,
        SeasonID: 0,
        Date: Date.now(),
        Amount: 60,
    });

    repaymentupload.save((err) => {
        if (err) console.log(err);
    });

    var uploads = await RepaymentsUpload.find({CustomerID: 1});
    
    await CustomerSummaryController.updateSummaries(uploads);
});