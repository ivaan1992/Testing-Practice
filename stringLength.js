const stringLength = (string) => {
  if (string.length > 10) {
    return 'string too long';
  } if (string.length < 1) {
    return 'string too short';
  }
  return string.length;
};

module.exports = { stringLength };