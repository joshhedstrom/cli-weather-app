const fs = require('fs');

let logData = function() {
    fs.readFile('./log.txt', 'utf-8', (err, data) => {
        if (err) return console.log(err);
        console.log('Log----------------------------------------------------------------->>>>')
        console.log(data);
    });
}


module.exports = logData;