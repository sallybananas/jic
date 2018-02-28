const Profile = require('../mongooseModels');

module.exports = {
    find: function(req, res) {
        Profile.find().then(function(data) {
        res.json(data);
        }).catch(function(err) {
        res.json(err);
        });
    },

    insert: function(req, res) {
        console.log(req.body)
        Profile.create(req.body).then(function(data) {
        res.json(data);
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