// to run: gulp benchmark
var pad = require('../lib');
var str = 'Hello World';
var lp = 1000;
var sp = 15;
var np = 2;
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite('pad');

suite.add('long', function () {
  pad(str, lp);
})
.add('short', function () {
  pad(str, sp);
})
.add('none', function () {
  pad(str, np);
});

module.exports = suite;
