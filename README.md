# Justin -One Acre Fund Final Interview

The main functionality of this application is to receive payments and updates customer credits when necessay.

## Deliverable 1
 This is a service class that input a list of (RepaymentUploads) client repayments, and determine which season(s) the repayment upload should be applied to. This class  is called `CustomerSummaryController.js` in the 
 `root/backend/controllers` directory. The algorithm was implemented in the `updateSummaries` function.

## Deliverable 2
 This a basic interface that allows repayments upload. After uploading, the `updateSummaries` function
 is applied to the upated data and updates existing customer summaries, repayments, and saves uploaded data
 in database.

## Deliverable 3
 This a directory containig test cases to test my application.

## Deliverable 4
 This a world document that contains post-mortem

### Setup

This application was coded in `Node.js` framework, `Express`, and `MongoDB` as database.
To run it locally, you have to:

1. Have mongoDB installed 
2. Install Node.js
3. Install Express.js
4. Istall all midleware you may need

### Starting the server:
In the node terminal (or comand line)
`node server.js` from the backend directory
When the server has been successfully started, run `http://localhost:3000/`