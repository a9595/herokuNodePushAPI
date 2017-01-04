var express = require('express');
var router = express.Router();
var controller = require('./push.controller');

router.route('/push')
    .post(controller.push)

module.exports = router;