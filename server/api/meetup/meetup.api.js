'use strict';

var Promise = require('bluebird');

var meetup = require('meetup-api')({
    key: process.env.MEETUP_KEY
});

var meetupApi = {
	getGroupByName: function(groupName) {
		return new Promise(function(resolve, reject) {
			meetup.getGroup({ 'urlname': groupName}, function(err, resp) {
				if (err) reject(err);
			    resolve(resp);
			});
		})
	}
}

module.exports = meetupApi;