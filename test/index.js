'use strict';

var pad = require('../lib');
var expect = require('chai').expect;
var str = 'Hello World';

describe('pad', function () {
  it('should return a string', function () {
    expect(pad(5, 1)).to.equal('5');
  });

  it('should pad', function () {
    expect(pad(str, 16)).to.equal('00000Hello World');
  });

  it('should not pad', function () {
    expect(pad(str, 1)).to.equal(str);
  });
});
