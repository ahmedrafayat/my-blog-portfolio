module.exports.toKebabCase = function (value) {
  return value.replace(/(\\s|_|-)+/gim, '-');
};
