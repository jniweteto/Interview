const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SeasonSchema = Schema(
    {
        SeasonID: {type: String, required: true, unique: true},
        SeasonName: {type: String, required: true},
        StartDate: {type: String, required:true},
        EndDate:{type: String, required:true},
       
    }
);
const Season = mongoose.model("Season", SeasonSchema);
module.exports = Season;