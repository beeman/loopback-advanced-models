var faker = require('faker');
var boot = require('../../boot.js');
var Q = require('q');
module.exports = function (app) {

    if (!process.env.FAKEDATA) {
        console.log(' - Set FAKEDATA=1 to add fake data');
        return;
    } else {
        console.log(' - Adding fake data');
    }

    obj = {
        model: app.models.Note,
        min: 0,
        max: process.env.MAX_NOTES || 10,
        schema: {
            title: faker.company.catchPhrase(),
            content: faker.lorem.paragraph()
        }
    };

    // Create maxNotes number of Notes
    boot(obj).then(console.log, console.error);

};