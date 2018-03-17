const User = require('../models/Users');
const Profile = require('../models/profile');

module.exports = {
    find: function(req, res) {
        User.findOne({
            email: req.body.email,
            password: req.body.password
             }).then(function(data) {
            console.log("find controller" , data);
            req.session.user.currentUser = {
                id: data._id,
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
            }
            req.session.user.loggedIn = true;
            req.session.user.isAdmin = false;
            console.log(req.session);

        res.json(req.session.user);
        }).catch(function(err) {
        res.json(err);
        });
    },

    insert: function(req, res) {
        console.log(req.body)
        User.create(req.body).then(function(data) {
            console.log(data, "coming from userlogin");
            req.session.user.currentUser = {
                id: data._id,
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
            }
            req.session.user.loggedIn = true;
            req.session.user.isAdmin = false;
        res.json(data);
        }).catch(function(err) {
        res.json(err);
        });
    },

    delete: function(req, res) {
        User.remove({
        _id: req.params.id
        }).then(function(data) {
        res.json(data);
        }).catch(function(err) {
        res.json(err);
        });
    },

    update: function(req, res) {
        User.update({
        _id: req.params.id
        }).then(function(data) {
        res.json(data);
        }).catch(function(err) {
        res.json(err);
        });
    }
};