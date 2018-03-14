const Medical = require('../models/Medical');

module.exports = {
    find: function(req, res) {
        Medical.find().then(function(data) {
        res.json(data);
        }).catch(function(err) {
        res.json(err);
        });
    },

    insert: function(req, res) {
        console.log(req.body)
        Medical.create(req.body).then(function(data) {
        res.json(data);
        }).catch(function(err) {
        res.json(err);
        });
    },

    delete: function(req, res) {
        Medical.remove({
        _id: req.params.id
        }).then(function(data) {
        res.json(data);
        }).catch(function(err) {
        res.json(err);
        });
    },

    update: function(req, res) {
        Medical.update({
        _id: req.params.id
        }).then(function(data) {
        res.json(data);
        }).catch(function(err) {
        res.json(err);
        });
    }
};