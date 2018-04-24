const weather = require('weather-js');
const moment = require('moment');
const admin = require('./admin.js');
const user = require('./user.js')

let time = moment();
let time_format = time.format('YYYY-MM-DD HH:mm:ss Z');

function UserSearch(name, location) {
    this.name = name;
    this.location = location;
    this.time = time_format;
    this.log = function() {
        fs.appendFile('./log.txt', `Name: ${this.name} || Location: ${this.location} || Time: ${time_format} \n`, (err) => {
            if (err) return console.log('ERROR: ', err);
        })
    };
}

UserSearch.prototype.getWeather = function(location) {
    weather.find({
        search: this.location,
        degreeType: 'F'
    }, function(err, res) {
        if (err) console.log(`ERROR: ${err}`);
        console.log(JSON.stringify(res, null, 2));

        module.exports = res;
    });
}



let us = new UserSearch('josh', 'minneapolis')

// module.exports = us;

// console.log(us)

us.getWeather();
// console.log(user)