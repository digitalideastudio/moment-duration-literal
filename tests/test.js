'use strict';
var moment = require('../index');
var expect = require('chai').expect;

describe('Moment Duration Literal', function () {
  it('should format 8400s', function (done) {
    expect(moment.duration(8400, 's').literal()).to.eql('2h 20m');
    done();
  });

  it('should format 99999999s', function (done) {
    expect(moment.duration(99999999, 's').literal()).to.eql('165w 9h 46m 39s');
    done();
  });

  it('should format null', function (done) {
    expect(moment.duration(null, 's').literal()).to.eql('');
    done();
  });

  it('should format empty string', function (done) {
    expect(moment.duration('', 's').literal()).to.eql('');
    done();
  });

  it('should format 1s', function (done) {
    expect(moment.duration(1, 's').literal()).to.eql('1s');
    done();
  });

  it('should format 86400', function (done) {
    expect(moment.duration(86400, 's').literal()).to.eql('1d');
    done();
  });

  it('should format summarized hours', function (done) {
    expect(moment.duration(86400, 's').literal({
      days: false,
      summarize: { hours: true },
    })).to.eql('24h');
    done();
  });

  it('should format non-summarized duration', function (done) {
    expect(moment.duration(99999999, 's').literal({
      months: true,
      years: true,
      summarize: { weeks: false },
    })).to.eql('3y 2mo 9h 46m 39s');
    done();
  });

  it('should format summarized months', function (done) {
    expect(moment.duration(99999999, 's').literal({
      months: true,
      summarize: { weeks: false, months: true },
    })).to.eql('38mo 9h 46m 39s');
    done();
  });

  it('should format with with custom separator', function (done) {
    expect(moment.duration(99999999, 's').literal({
      separator: ', ',
      months: true,
      summarize: { weeks: false, months: true },
    })).to.eql('38mo, 9h, 46m, 39s');
    done();
  });

  it('should format using reverse order', function (done) {
    expect(moment.duration(99999999, 's').literal({
      reverse: true,
      months: true,
      summarize: { weeks: false, months: true },
    })).to.eql('39s 46m 9h 38mo');
    done();
  });
});

