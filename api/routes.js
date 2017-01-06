module.exports = function (app) {
    var pushRouter = require('./push.router');
    var experimentRouter = require('./experiment.router.js')
    app.use('/api', pushRouter);
    app.use('/api', experimentRouter);
}