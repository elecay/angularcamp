'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
	event_id: Number,
	venue: {
		country: String,
		city: String,
		address_1: String,
		name: String,
		lon: Number,
		id: Number,
		lat: Number,
		repinned: Boolean
	},
	description: String,
	time: { type: Date }
});

/**
 * Virtuals
 */
EventSchema
  .virtual('id')
  .set(function(id) {
  	this._event_id = id;
    this.event_id = id;
  })
  .get(function() {
    return this._event_id;
  });

/**
 * Validations
 */


module.exports = mongoose.model('Event', EventSchema);