var V = require('./validate');
var format = require('./format');

module.exports = (function() {

    function toUtc(input) {
        V.vDate(input);
        const utc = JSON.parse(JSON.stringify(new Date(input)));
        return utc.slice(0, 19).replace(/T/, ' ');
    }

    function toLocal(input) {
        V.vDate(input);
        const _date = new Date(input + 'z');
        return format(_date);
    }

    return { toUtc, toLocal };
})();