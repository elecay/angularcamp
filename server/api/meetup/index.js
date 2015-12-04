'use strict';

var express = require('express');
var controller = require('./meetup.controller');

var router = express.Router();

router.get('/fetch', controller.fetch);

module.exports = router;