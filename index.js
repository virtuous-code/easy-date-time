var now = require('./src/now');
var format = require('./src/format');
var utc = require('./src/utc');

module.exports = {
    now, format, toUtc: utc.toUtc, toLocal: utc.toLocal
}