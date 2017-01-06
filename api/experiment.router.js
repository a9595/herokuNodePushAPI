var express = require('express');
var router = express.Router();
var controller = require('./experiment.controller');

router.route('/experiment')
    .get(controller.experiment);

module.exports = router;