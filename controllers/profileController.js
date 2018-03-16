const Profile = require('../models/profile');
const User = require('../models/Users');
const exphbs = require("express-handlebars");



module.exports = {
    find: function(req, res) {
        // console.log(req);
        console.log("req.params: ", req.body.id);
        Profile.findById(req.body.id).then(function(data) {
        // res.json(data);
        console.log(data);
        res.redirect(301, "/updatedprofile/"+req.body.id);
        // res.send("profile", { profiles: data });
        }).catch(function(err) {
        res.json(err);
        
        });
    },

    insert: function(req, res) {
        console.log(req.body)
        Profile.create(req.body)
        .then(function(data) {
        console.log("data: ", data);
        res.render("profile", { profiles: data } );
        }).catch(function(err) {
        res.json(err);
        });
    },

    delete: function(req, res) {
        Profile.remove({
        _id: req.params.id
        }).then(function(data) {
        res.json(data);
        }).catch(function(err) {
        res.json(err);
        });
    },

    update: function(req, res) {
        Profile.update({
        _id: req.params.id
        }).then(function(data) {
        res.json(data);
        }).catch(function(err) {
        res.json(err);
        });
    }
};