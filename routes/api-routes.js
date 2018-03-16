const db = require("../models");
const profileController = require("../controllers/profileController.js");
const userController = require("../controllers/userController.js");
const medicalController = require("../controllers/MedicalController.js");
const path = require("path");

module.exports = function (app) {

    let Users = [];


    // app.post("/signup", userController.insert);
    app.post('/signup', userController.insert, function (req, res) {
        console.log(req.body)
        console.log("signed up");
        if (!req.body.email || !req.body.password) {
            res.status("400");
            res.send("/");
        } else {
            Users.filter(function (user) {
                if (user.email === req.body.email) {
                    res.render('signup', {
                        message: "User Already Exists! Login or choose another user email"
                    });
                }
            });
            var newUser = { email: req.body.email, password: req.body.password }
            Users.push(newUser);
            req.session.user = newUser;
            // userController.insert;
            //res.redirect('/main');
            // window.location.href = "/add.html";
            // res.redirect("add.html")
        }
    });

    app.get("/signup", userController.find);
    // app.get('/signup', function (req, res) {
    //     console.log("signed up");
    //     res.render('/signup');

    // });

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

    app.get('/tour', function (req, res) {

        res.sendFile(path.join(__dirname + '/../public/tour.html'));

    });


    /////////////////////////////////////////////////////////////////////////////////

    // User Controller Function Calls

    app.post("/add", userController.insert);
    

    // app.get("/index", userController.find);

    app.delete("/delete/user", userController.delete);
    
    app.put("/update/user", userController.update);

    // Profile Controller Function Calls

    app.post("/profile", profileController.insert);

    app.get("/main", profileController.find);

    app.delete("/delete/profile", profileController.delete);
    
    app.put("/update/profile", profileController.update);

        // Profile Controller Function Calls

    app.post("/profile/medical", medicalController.insert);

    app.get("/main/medical", medicalController.find);

    app.delete("/delete/medical", medicalController.delete);
    
    app.put("/update/medical", medicalController.update);


    // console.log(res.json(data));

    // app.post('/signup', function (req, res) {
    //     console.log("signed up");
    //     if (!req.body.email || !req.body.password) {
    //         res.status("400");
    //         res.send("Invalid details!");
    //     } else {
    //         Users.filter(function (user) {
    //             if (user.email === req.body.email) {
    //                 res.render('signup', {
    //                     message: "User Already Exists! Login or choose another user email"
    //                 });
    //             }
    //         });
    //         var newUser = { email: req.body.email, password: req.body.password };
    //         Users.push(newUser);
    //         req.session.user = newUser;
    //         res.redirect('/main');
    //     }
    // });

    // function checkSignIn(req, res) {
    //     if (req.session.user) {
    //         next();     //If session exists, proceed to page
    //     } else {
    //         var err = new Error("Not logged in!");
    //         console.log(req.session.user);
    //         next(err);  //Error, trying to access unauthorized page!
    //     }
    // }
    // app.get('/main', checkSignIn, function (req, res) {
    //     res.render('main', { email: req.session.user.email })
    // });

    // app.get('/login', function (req, res) {
    //     res.render('login');
    // });

    // app.post('/login', function (req, res) {
    //     console.log(Users);
    //     if (!req.body.email || !req.body.password) {
    //         res.render('login', { message: "Please enter both email and password" });
    //     } else {
    //         Users.filter(function (user) {
    //             if (user.email === req.body.email && user.password === req.body.password) {
    //                 req.session.user = user;
    //                 res.redirect('/main');
    //             }
    //         });
    //         res.render('login', { message: "Invalid credentials!" });
    //     }
    // });

    // app.get('/logout', function (req, res) {
    //     req.session.destroy(function () {
    //         console.log("user logged out.")
    //     });
    //     res.redirect('/login');
    // });

    // app.use('/main', function (err, req, res, next) {
    //     console.log(err);
    //     //User should be authenticated! Redirect him to log in.
    //     res.redirect('/login');
    // });

    // app.post("/profile", function (req, res) {
    //     console.log("we hit /profile route: ",  req.body);

    //     db.Profile.create({
    //         birthdate: req.body.birthdate,
    //         address: req.body.address,
    //         phone: req.body.phone,
    //         height: req.body.height,
    //         weight: req.body.weight,
    //         hair: req.body.hair,
    //         eyes: req.body.eyes

    //         // jobUnknownTime: false
    //     }).then(function (results) {
    //         console.log(results)
    //         res.json(results);
    //         // console.log("results" , results);
    //     });

    // });

}