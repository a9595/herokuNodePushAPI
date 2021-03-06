var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var FCM = require('fcm-node');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var routes = require('../api/routes');
routes(app);


app.set('port', (process.env.PORT || 5000));

app.use(express.static('/public'));

// views is directory for all template files
app.set('views', '/views');
app.set('view engine', 'ejs');


// routes
// var index = require('./routes/index');
// app.use('/', index);



app.get('/', function (request, response) {
    response.sendStatus(200);
});

/*
app.post('/notification', function (req, res) {
    console.log("Request body = ", req.body);

    var deviceTokenEmulator = "fs5O5HoGKok:APA91bGnj2dKlQ0QfFnCtRU9LvhQyTbWnnw5PFLqzR6emb7r1hTCuZiD6CnLJ7ntu9wts-hZXBSkjH8A1n6bsTHqzmeyznN9pbwO1I88co-GPKsrT5F_X6P3hguA1QcZzZTVWYddXqac"
    var deviceToken5X = "cvmUMcMamrQ:APA91bHcvSV2xDUjqYT48g_CI3lxelIGtRwDbZrhkCVlj7L6Lrnn3pn9GlaQMT2CKRsMjyWAEsvaxD5skbLktpEuc8h7zMrES5vVK49LQy1zmwfArV6qMkKsq6oRnF1sSZT0nWlMbC33"
    var serverKey = "AAAA-Qaz-e8:APA91bHXGHIbaxoAYzSY0fWPsDA3fvNC9x0_Xa1ent9H9jYbYX-EciOOE3RrHGwMaLg_NeZ96hdZmH_H56uSgEFtNwsVZgQpZ03X-O3o3V5PMwHtHPPq37iDmNfvddBa6HDIk9gOWmGg74gHX0wg-snMas5RvFt0LA"

    var fcm = new FCM(serverKey);

    // var mobile_tokens = [];
    // mobile_tokens.push(deviceToken5X);

    var message = {
        to: deviceToken5X,
        notification: {
            title: "title",
            body: req.body
        },
        data: req.body
    };

    fcm.send(message, function (err, response) {
        if (err) {
            console.log("Error!!!", err.message);
            res.sendStatus(500);
        } else {
            console.log("Success!!");
            res.sendStatus(200);
        }
    });


});*/

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
