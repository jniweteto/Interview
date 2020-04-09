//database
const mongoose = require('mongoose');

module.exports = callback => {

    mongoose.set('useCreateIndex', true);
    mongoose.connect('mongodb://localhost:27017/ONEACREFUND', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });

    var db = mongoose.connection;

    db.on("connected", () => {
        console.log('Database is connected');
    });

    db.on('error', err => {
        process.exit(1);
    });

    db.on("disconnected", err => {
        process.exit(1);
    });

    db.on("open", () => {
        callback(mongoose);
    });
}