var now = require('./src/now');
var format = require('./src/format');
var utc = require('./src/utc');
var addDays = require('./src/add-days');
var addMonths = require('./src/add-months');

module.exports = {
    now, format, toUtc: utc.toUtc, toLocal: utc.toLocal, addDays, addMonths
}