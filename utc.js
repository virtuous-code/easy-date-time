var fnValidate = require('./validate');
var format = require('./format');

module.exports = (function() {

    function toUtc(input) {
        fnValidate(input);
        const utc = JSON.parse(JSON.stringify(new Date(input)));
        return utc.slice(0, 19).replace(/T/, ' ');
    }

    function toLocal(input) {
        fnValidate(input);
        const _date = new Date(input + 'z');
        return format(_date);
    }

    return { toUtc, toLocal };
})();