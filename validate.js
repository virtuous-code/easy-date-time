var fnError = require('./error');

module.exports = function(input) {
    if (!new Date(input).getDate()) {
        fnError('Your input is not a valid date!');
    }
}