const Profile = require('../models/profile');
const User = require('../models/Users');
const exphbs = require("express-handlebars");



module.exports = {
    find: function(req, res) {
        // console.log(req);
        console.log("req.params: ", req.body.id);
        User.findById(req.params.userId).populate("Profile").then(function(data) {
            
        // res.json(data);
        console.log(data);
        res.json(data)
        // res.send("profile", { profiles: data });
        }).catch(function(err) {
        res.json(err);
        
        });
    },

    insert: function(req, res) {
        console.log(req.body)
        Profile.create(req.body)
        .then(function(data) {
        console.log("Profilecontroller data: ", data);
        res.render("profile", { profiles: data } );
        }).catch(function(err) {
        res.json(err);
        });
    },

    delete: function(req, res) {
        db.Profile.remove({
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