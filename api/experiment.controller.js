var admin = require('firebase-admin');

function initFirebaseAdmin() {
    var serviceAccount = require("../other/keys");

    var defaultApp = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://pja-buffet.firebaseio.com"
    });

    var db = defaultApp.database();
    var ref = db.ref('users');
    return ref;
}

exports.experiment = (req, res) => {
    // Initialize Firebase
    var ref = initFirebaseAdmin();
    ref.once("value", function (snapshot) {
        var value = snapshot.val();
        console.log(value);
        res.send(value);

    }, function (error) {
        console.log(error.message);
    })
};