module.exports = function (app) {
    var pushRouter = require('./push.router');
    app.use('/api', pushRouter);
}