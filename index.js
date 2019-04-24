'use strict';

if (typeof require === 'function') {
  var moment = require('moment');
}

moment.duration.fn.literal = function literal() {
  var segments = [];
  var weeks = +this.asWeeks().toFixed(0);
  var days = this.days();
  var hours = this.hours();
  var minutes = this.minutes();
  var seconds = this.seconds();

  weeks && segments.push(`${weeks}w`);
  days && segments.push(`${days}d`);
  hours && segments.push(`${hours}h`);
  minutes && segments.push(`${minutes}m`);
  seconds && segments.push(`${seconds}s`);

  return segments.join(' ');
};

if (typeof module != 'undefined' && module.exports) {
  module.exports = moment;
}

