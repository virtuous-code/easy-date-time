var V = require('./validate');
var format = require('./format');

module.exports = function(ori, years = 0) {
    V.vDate(ori);
    V.vNumber(years);
    
    if (!years) {
        return format(ori);
    } else {
        const _cloned = new Date(format(ori));
        const _y = _cloned.getFullYear();
        return format(_cloned.setFullYear(_y + years));
    }
}