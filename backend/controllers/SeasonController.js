
const Season = require('../models/Season');

class SeasonController {

    //creating a note
    static async createSeaon(req, res) {
         
            const season = new Season({
                SeasonID: 110,
                SeasonName: '2012, Short Rain',
                StartDate: '8/1/2012',
                EndDate:'0'});

            season.save((err) => {
                if (err) return res.status(404).send({ message: err.message });
                return res.send({ season });
            });
        


    }

    //reading
    static async readSeasons(req, res) {
        Season.find({}).sort({ SeasonID: 'ascending' }).exec((err, seasons) => {
            if (err) return res.status(404).send('Error while loading seasons!');
            return res.send({ seasons });
        });
    }

}

module.exports = SeasonController;