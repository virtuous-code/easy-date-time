module.exports = function(input) {
    const date = new Date(input);
    const _y = date.getFullYear() + '';
    const _m = ('0' + (date.getMonth() + 1)).slice(-2);
    const _d = ('0' + date.getDate()).slice(-2);
    const _hh = ('0' + date.getHours()).slice(-2);
    const _mm = ('0' + date.getMinutes()).slice(-2);
    const _ss = ('0' + date.getSeconds()).slice(-2);
    return {
        y: _y,
        sy: _y.slice(-2),
        m: _m,
        d: _d,
        hh: _hh,
        mm: _mm,
        ss: _ss,
        ts: +date
    }
}