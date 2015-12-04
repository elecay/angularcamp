/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Meetup = require('./meetup.model');

exports.register = function(socket) {
  Meetup.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Meetup.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('meetup:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('meetup:remove', doc);
}