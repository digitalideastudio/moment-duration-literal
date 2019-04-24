'use strict';
var moment = require('../index');
var expect = require('chai').expect;

console.log(moment.duration);

describe('Moment Duration Literal', function () {
  it('should format 2h 20m', function (done) {
    expect(moment.duration(8400).literal()).to.eql('2h 20m');
    done();
  });
});

