var fnValidate = require('./validate');
var fnEle = require('./element');

module.exports = function(input, format) {
    fnValidate(input);
    const _ele = fnEle(input);

    switch((format + '').replace(/\ /g, '').toLowerCase()) {
        case 'yyyy-mm-dd':
            return _ele.y + '-' + _ele.m + '-' + _ele.d;
        case 'yyyy-mm-ddhh:mm:ss':
        case 'yyyy-mm-ddh:m:s':
            return _ele.y + '-' + _ele.m + '-' + _ele.d + ' ' + _ele.hh + ':' + _ele.mm + ':' + _ele.ss;
        case 'yyyy/mm/dd':
            return _ele.y + '/' + _ele.m + '/' + _ele.d;
        case 'yyyy/mm/ddhh:mm:ss':
        case 'yyyy/mm/ddh:m:s':
            return _ele.y + '/' + _ele.m + '/' + _ele.d + ' ' + _ele.hh + ':' + _ele.mm + ':' + _ele.ss;
        case 'yy-mm-dd':
            return _ele.sy + '-' + _ele.m + '-' + _ele.d;
        case 'yy/mm/dd':
            return _ele.sy + '/' + _ele.m + '/' + _ele.d;
        case 'yyyymmdd':
            return _ele.y + _ele.m + _ele.d;
        case 'yymmdd':
            return _ele.sy + _ele.m + _ele.d;
        case 'hh:mm:ss':
        case 'h:m:s':
        case 'time':
        case 't':
            return _ele.hh + ':' + _ele.mm + ':' + _ele.ss;
        case 'hh:mm':
        case 'h:m':
            return _ele.hh + ':' + _ele.mm;
        case 'mm:ss':
        case 'm:s':
            return _ele.mm + ':' + _ele.ss;
        case 'ts':
        case 'timestamp':
            return _ele.ts;
        default:
            return _ele.y + '-' + _ele.m + '-' + _ele.d + ' ' + _ele.hh + ':' + _ele.mm + ':' + _ele.ss;
    }
}