const moment = require('moment');
const time = moment();
let time_format = time.format('YYYY-MM-DD HH:mm:ss Z');

let NewUser = function(name, location) {
    this.name = name;
    this.location = location;
    this.time = time_format;
}

NewUser.prototype.getWeather = function(location) {
    weather.find({
        search: this.location,
        degreeType: 'F'
    }, function(err, res) {
        if (err) console.log(`ERROR: ${err}`);
        console.log(JSON.stringify(res, null, 2));
    });
}

NewUser.prototype.log = function(name, location) {
    fs.appendFile('./log.txt', `Name: ${this.name} || Location: ${this.location} || Time: ${time_format} \n`, (err) => {
        if (err) return console.log('ERROR: ', err);
    })
};



module.exports = NewUser;