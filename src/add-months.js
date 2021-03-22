var V = require('./validate');
var format = require('./format');

module.exports = function(ori, months = 0) {
    V.vDate(ori);
    V.vNumber(months);
    
    if (!months) {
        return format(ori);
    } else {
        const _cloned = new Date(format(ori));
        const _m = _cloned.getMonth();
        return format(_cloned.setMonth(_m + months));
    }
}
