'use strict';

var _ = require('lodash');
var MeetupApi = require('./meetup.api');

// Updates all data from Meetup.com
exports.fetch = function(req, res) {
  MeetupApi.getEventsByGroupName('AngularJS-Beers').then(function(resp) {
    return res.status(200).send(resp);
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}