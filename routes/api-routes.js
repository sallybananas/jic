var db = require("../models");
module.exports = function (app) {


    var Users = [];

    app.get('/signup', function (req, res) {
        console.log("signed up");
        res.render('signup');

    });

    app.post('/signup', function (req, res) {
        console.log("signed up");
        if (!req.body.email || !req.body.password) {
            res.status("400");
            res.send("Invalid details!");
        } else {
            Users.filter(function (user) {
                if (user.email === req.body.email) {
                    res.render('signup', {
                        message: "User Already Exists! Login or choose another user email"
                    });
                }
            });
            var newUser = { email: req.body.email, password: req.body.password };
            Users.push(newUser);
            req.session.user = newUser;
            res.redirect('/main');
        }
    });

    function checkSignIn(req, res) {
        if (req.session.user) {
            next();     //If session exists, proceed to page
        } else {
            var err = new Error("Not logged in!");
            console.log(req.session.user);
            next(err);  //Error, trying to access unauthorized page!
        }
    }
    app.get('/main', checkSignIn, function (req, res) {
        res.render('main', { email: req.session.user.email })
    });

    app.get('/login', function (req, res) {
        res.render('login');
    });


    app.post('/login', function (req, res) {
        console.log(Users);
        if (!req.body.email || !req.body.password) {
            res.render('login', { message: "Please enter both email and password" });
        } else {
            Users.filter(function (user) {
                if (user.email === req.body.email && user.password === req.body.password) {
                    req.session.user = user;
                    res.redirect('/main');
                }
            });
            res.render('login', { message: "Invalid credentials!" });
        }
    });

    app.get('/logout', function (req, res) {
        req.session.destroy(function () {
            console.log("user logged out.")
        });
        res.redirect('/login');
    });

    app.use('/main', function (err, req, res, next) {
        console.log(err);
        //User should be authenticated! Redirect him to log in.
        res.redirect('/login');
    });


    app.post("/profile", function (req, res) {
        console.log("we hit /profile route: ",  req.body);

        db.Profile.create({
            birthdate: req.body.birthdate,
            address: req.body.address,
            phone: req.body.phone,
            height: req.body.height,
            weight: req.body.weight,
            hair: req.body.hair,
            eyes: req.body.eyes

            // jobUnknownTime: false
        }).then(function (results) {
            console.log(results)
            res.json(results);
            // console.log("results" , results);
        });

    });


}