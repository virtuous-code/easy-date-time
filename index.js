var now = require('./now');
var format = require('./format');
var utc = require('./utc');

module.exports = {
    now, format, toUtc: utc.toUtc, toLocal: utc.toLocal
}