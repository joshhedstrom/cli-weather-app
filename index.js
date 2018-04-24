const fs = require('fs');
const weather = require('weather-js');
const admin = require('./admin.js');
const user = require('./user.js')

let viewer = process.argv[2];
let name = process.argv[3];
let location = process.argv[4]


if (viewer === 'admin') {
    admin.logData();
} else if (viewer === 'user') {
    user.NewUser(name, location)
    user.getWeather();
    // module.exports = name, location;
}

// admin.logData();
// console.log(admin);
// console.log(user)
