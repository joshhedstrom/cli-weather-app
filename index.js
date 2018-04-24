const admin = require('./admin.js');
const user = require('./user.js')

let viewer = process.argv[2];
let name = process.argv[3];
let location = process.argv[4]


if (viewer === 'admin') {
    admin.logData();
} else if (viewer === 'user') {

	let person = new user.NewUser(name, location);

    person.getWeather();
    person.log();
}
