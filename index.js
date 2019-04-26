'use strict';

if (typeof require === 'function') {
  var moment = require('moment');
}

moment.duration.fn.literal = function literal(options) {
  var defaults = {
    years: false,
    months: false,
    weeks: true,
    days: true,
    hours: true,
    minutes: true,
    seconds: true,
    summarize: {
      months: false,
      weeks: true,
      days: false,
      hours: false,
      minutes: false,
      seconds: false,
    },
    separator: ' ',
    reverse: false,
  };
  var options = Object.assign({}, defaults, options);
  var segments = [];
  var years = this.years();

  var months = options.summarize.months ? +Math.floor(this.asMonths()).toFixed(0) : this.months();
  var weeks = options.summarize.weeks ? +Math.floor(this.asWeeks()).toFixed(0) : this.weeks();
  var days = options.summarize.days ? +Math.floor(this.asDays()).toFixed(0) : this.days();
  var hours = options.summarize.hours ? +Math.floor(this.asHours()).toFixed(0) : this.hours();
  var minutes = options.summarize.minutes ? +Math.floor(this.asMinutes()).toFixed(0) : this.minutes();
  var seconds = options.summarize.seconds ? +Math.floor(this.asSeconds()).toFixed(0) : this.seconds();

  options.years && years && segments.push(`${years}y`);
  options.months && months && segments.push(`${months}mo`);
  options.weeks && weeks && segments.push(`${weeks}w`);
  options.days && days && segments.push(`${days}d`);
  options.hours && hours && segments.push(`${hours}h`);
  options.minutes && minutes && segments.push(`${minutes}m`);
  options.seconds && seconds && segments.push(`${seconds}s`);

  options.reverse && segments.reverse();

  return segments.join(options.separator);
};

if (typeof module != 'undefined' && module.exports) {
  module.exports = moment;
}

