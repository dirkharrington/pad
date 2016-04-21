'use strict';

module.exports = function (ch, w, c) {
  var str = String(ch);
  var len = str.length;

  if (len < w) {
    var char = c || '0';
    var pad = w - len;
    return char.repeat(pad) + str;
  }

  return str;
};
