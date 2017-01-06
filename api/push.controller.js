var FCM = require('fcm-node');

exports.push = (req, res) => {
    console.log("Request body = ", req.body);

    // var deviceTokenEmulator = "fs5O5HoGKok:APA91bGnj2dKlQ0QfFnCtRU9LvhQyTbWnnw5PFLqzR6emb7r1hTCuZiD6CnLJ7ntu9wts-hZXBSkjH8A1n6bsTHqzmeyznN9pbwO1I88co-GPKsrT5F_X6P3hguA1QcZzZTVWYddXqac"
    // var deviceToken5X = "cvmUMcMamrQ:APA91bHcvSV2xDUjqYT48g_CI3lxelIGtRwDbZrhkCVlj7L6Lrnn3pn9GlaQMT2CKRsMjyWAEsvaxD5skbLktpEuc8h7zMrES5vVK49LQy1zmwfArV6qMkKsq6oRnF1sSZT0nWlMbC33"
    var serverKey = "AAAA-Qaz-e8:APA91bHXGHIbaxoAYzSY0fWPsDA3fvNC9x0_Xa1ent9H9jYbYX-EciOOE3RrHGwMaLg_NeZ96hdZmH_H56uSgEFtNwsVZgQpZ03X-O3o3V5PMwHtHPPq37iDmNfvddBa6HDIk9gOWmGg74gHX0wg-snMas5RvFt0LA";
    var fcm = new FCM(serverKey);

    // var mobile_tokens = [];
    // mobile_tokens.push(deviceToken5X);

    var tokenBody = req.body.token;
    var secretCode = "Your secret code: " + req.body.secretCode;
    console.log("Token = ", tokenBody, "; Secret code = ", secretCode);

    let title = "Your order is ready";
    var message = {
        to: tokenBody,
        notification: {
            title: title,
            body: secretCode
        },
        data: req.body
    };

    fcm.send(message, function (err, response) {
        if (err) {
            console.log("Error!!!", err.message);
            console.error(err);
            res.sendStatus(500);
        } else {
            console.log("Successfully sent with response: ", response);
            res.sendStatus(200);
        }
    });

};