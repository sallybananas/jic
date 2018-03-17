const db = require("../models");
const profileController = require("../controllers/profileController.js");
const userController = require("../controllers/userController.js");
const medicalController = require("../controllers/MedicalController.js");
const path = require("path");

module.exports = function (app) {

    let Users = [];

    // app.post("/signup", userController.insert);
    app.post('/signup', userController.insert)

    app.post("/api/add/:userId", function (req, res) {
        console.log(req.body)
        db.Profile.create(req.body)
            .then(function (data) {
                console.log("Profilecontroller data: ", data);

                return db.User.findOneAndUpdate({_id: req.params.userId}, { $push: { Profile: data._id } }, { new: true })
            }).then(function (userProfileData) {
                res.json(userProfileData)
            }).catch(function (err) {
                res.json(err);
            });
    });

    // app.get("/index", userController.find);
    app.get("/api/session", function (req, res) {
        res.json(req.session.user)
    });

    app.delete("/delete/user", userController.delete);

    app.put("/update/user", userController.update);

    // Profile Controller Function Calls

    app.post("/profile", profileController.insert);

    // app.get("/profile", profileController.insert);

    app.get("/api/main/:userId", profileController.find);

    app.delete("/delete/profile/:profileId", profileController.delete);

    app.put("/update/profile", profileController.update);

    // Profile Controller Function Calls

    app.post("/profile/medical", medicalController.insert);

    app.get("/main/medical", medicalController.find);

    app.delete("/delete/medical", medicalController.delete);

    app.put("/update/medical", medicalController.update);

    // , function (req, res) {
    //     console.log(req.body)
    //     console.log("signed up");
    //     if (!req.body.email || !req.body.password) {
    //         res.status("400");
    //         res.send("/");
    //     } else {
    //         Users.filter(function (user) {
    //             if (user.email === req.body.email) {
    //                 res.render('signup', {
    //                     message: "User Already Exists! Login or choose another user email"
    //                 });
    //             }
    //         });
    //         var newUser = { email: req.body.email, password: req.body.password }
    //         Users.push(newUser);
    //         req.session.user = newUser;
    //         // userController.insert;
    //         //res.redirect('/main');
    //         // window.location.href = "/add.html";
    //         // res.redirect("add.html")
    //     }
    // });

    // app.get("/signup", userController.find);
    // // app.get('/signup', function (req, res) {
    // //     console.log("signed up");
    // //     res.render('/signup');

    // // });

    function checkSignIn(req, res) {
        if (req.session.email) {
            next();     //If session exists, proceed to page
        } else {
            var err = new Error("Not logged in!");
            console.log("req.session.email" , req.session.email);
            next(err);  //Error, trying to access unauthorized page!
        }
    }
    app.get('/main', checkSignIn, function (req, res) {
        res.render('main', { email: req.session.email })
    });

    app.get('/login', function (req, res) {

        if (!req.query.email || !req.query.password) {
            res.send('login failed');
        } else if (req.query.email === db.user.email || req.query.password === db.user.password) {

            res.send("login success!");
        }
        res.render('login');
    });

    app.post('/api/login', userController.find)

    // app.post('/login', function (req, res) {
    //     console.log("users", Users);
    //     if (!req.body.email || !req.body.password) {
    //         res.render('login', { message: "Please enter both email and password" });
    //     } else {
    //         Users.filter(function (user) {
    //             if (user.email === req.body.email && user.password === req.body.password) {
    //                 req.session.email = email;
    //                 req.session.authenticated = true;
    //                 console.log("rendered" , req.session.authenticated);
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

    app.get('/logout', function (req, res) {
        // req.session.user = {}
        req.session.user.loggedIn = false;
        req.session.user.isAdmin = false;
        // res.json(req.session.user)
        console.log("user logged out.");
        res.redirect('/index');
    });



    app.get('/tour.html', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/tour.html'));
    });

    app.get('/profile.html', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/profile.html'));
    });


    app.get('/tour', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/tour.html'));
    });

    // app.get('/logout', function (req, res) {
    //     res.sendFile(path.join(__dirname + '/../public/index.html'));
    // });

    app.get('/index.html', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

    app.get('/add.html', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/add.html'));
    });

    app.get('/addother.html', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/addother.html'));
    });

    app.get('/amber.html', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/amber.html'));
    });

    app.get('/amberalerts.html', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/amberalerts.html'));
    });

    app.get('/childsafekit.html', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/childsafekit.html'));
    });

    app.get('/firstaid.html', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/firstaid.html'));
    });

    app.get('/poisoncontrol.html', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/poisoncontrol.html'));
    });

    app.get('/resources.html', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/resources.html'));
    });

    app.get('/main.html', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/main.html'));
    });
    /////////////////////////////////////////////////////////////////////////////////

    // User Controller Function Calls

    // app.post("/add", userController.insert);
    

    // // app.get("/index", userController.find);

    // app.delete("/delete/user", userController.delete);
    
    // app.put("/update/user", userController.update);

    // // Profile Controller Function Calls

    // app.post("/profile", profileController.insert);

    app.post("/getprofile", profileController.find);

    app.get("/updatedprofile/:id", function(req, res) {
        console.log("updatedprofile req.params: " , req.params.id);
    } )

    // app.get("/main/:id", profileController.find);

    app.delete("/delete/profile", profileController.delete);
    
    // app.put("/update/profile", profileController.update);

    //     // Profile Controller Function Calls

    // app.post("/profile/medical", medicalController.insert);

    // app.get("/main/medical", medicalController.find);

    // app.delete("/delete/medical", medicalController.delete);
    
    // app.put("/update/medical", medicalController.update);

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
    
    app.get("*", function (req, res) {
        res.redirect("/index.html")
    });
}