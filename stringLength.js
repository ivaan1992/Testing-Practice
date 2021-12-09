const stringLength = (string) => {
    if (string.length > 10) {
        return 'string too long';
    } else if(string.length < 1) {
        return 'string too short';
    } else {
        return string.length;
    }
};

module.exports = {stringLength}