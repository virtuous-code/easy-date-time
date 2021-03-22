var fnError = require('./error');

module.exports = {
    vDate: function (input) {
        if (!new Date(input).getDate()) {
            fnError('Your input is not a valid date!');
        }
    },
    vNumber: function (input) {
        if (isNaN(+input)) {
            fnError('Your input is not a valid number!');
        }
    }
}