'use strict';

var _ = require('lodash');
var Meetup = require('./meetup.model');
var MeetupApi = require('./meetup.api');

// Get list of meetups
exports.index = function(req, res) {
  Meetup.find(function (err, meetups) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(meetups);
  });
};

// Get a single meetup
exports.show = function(req, res) {
  Meetup.findById(req.params.id, function (err, meetup) {
    if(err) { return handleError(res, err); }
    if(!meetup) { return res.status(404).send('Not Found'); }
    return res.json(meetup);
  });
};

// Creates a new meetup in the DB.
exports.create = function(req, res) {
  Meetup.create(req.body, function(err, meetup) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(meetup);
  });
};

// Updates an existing meetup in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Meetup.findById(req.params.id, function (err, meetup) {
    if (err) { return handleError(res, err); }
    if(!meetup) { return res.status(404).send('Not Found'); }
    var updated = _.merge(meetup, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(meetup);
    });
  });
};

// Deletes a meetup from the DB.
exports.destroy = function(req, res) {
  Meetup.findById(req.params.id, function (err, meetup) {
    if(err) { return handleError(res, err); }
    if(!meetup) { return res.status(404).send('Not Found'); }
    meetup.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

// Updates all data from Meetup.com
exports.fetch = function(req, res) {
  MeetupApi.getGroupByName('AngularJS-Beers').then(console.log);
  return res.status(200).send('Fetching data...');
};

function handleError(res, err) {
  return res.status(500).send(err);
}