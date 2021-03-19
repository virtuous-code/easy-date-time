var fnEle = require('./element');

module.exports = function(format) {
    const _ele = fnEle(new Date);

    switch((format + '').replace(/\ /g, '').toLowerCase()) {
        case '-':
            return _ele.y + '-' + _ele.m + '-' + _ele.d + ' ' + _ele.hh + ':' + _ele.mm + ':' + _ele.ss;
        case '/': 
            return _ele.y + '/' + _ele.m + '/' + _ele.d + ' ' + _ele.hh + ':' + _ele.mm + ':' + _ele.ss;
        case 'ts':
        case 'timestamp':
            return _ele.ts;
        case 'time':
        case 't':
            return _ele.hh + ':' + _ele.mm + ':' + _ele.ss;
        default:
            return _ele.y + '-' + _ele.m + '-' + _ele.d + ' ' + _ele.hh + ':' + _ele.mm + ':' + _ele.ss;
    }
}