var V = require('./validate');
var format = require('./format');
var util = require('./util');

module.exports = function(ori, days = 0) {
    V.vDate(ori);
    V.vNumber(days);
    return format(+new Date(ori) + util.daysInts(days));
}