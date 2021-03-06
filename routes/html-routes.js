// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    console.log("html routes?");  
    res.render("index");
  });

  app.get("/main/:id", function (req, res) {
    User.findByID(req.params.id)      
      
    }).then(function (results) {
      console.log("results: ", results);
      res.render("profile", { profile: results });
    });

//   app.get("/search", function (req, res) {
//     db.Job.findAll({
//       where: {
//         createdAt: {
//           $ne: null
//         }
//       },
//       order: [
//         [ 'createdAt', 'DESC']
//       ],
//       limit: 10
//     }).then(function (results) {
//       console.log("results: ", results);
//       res.render("search", { jobs: results });
//     });
//   });

//   app.get("/contact", function(req, res) {
//     res.sendFile(path.join(__dirname, "../views/contact.handlebars"));
//   });

//   app.get("/login", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });

//   app.get("*", function (req, res, next) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

//   // authors route loads author-manager.html
//   app.get("/authors", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
//   });
};
