const User = require('../mongooseModels');

module.exports = {
    find: function(req, res) {
        User.find().then(function(data) {
        res.json(data);
        }).catch(function(err) {
        res.json(err);
        });
    },

    insert: function(req, res) {
        console.log(req.body)
        User.create(req.body).then(function(data) {
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