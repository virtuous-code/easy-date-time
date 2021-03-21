var fnValidate = require('./validate');
var format = require('./format');
var util = require('./util');

module.exports = function(ori, days) {
    fnValidate(ori);
    const _days = days && days > 0 ? days : 1;
    return format(+new Date(ori) + util.daysInts(_days));
}