const Officer = require("../models/officer.model");
var request = require('request');


// Create and Save a new Officer
exports.create = (req, res) => {
    // Validate request
    if (!req.body.officer_Id) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    if (!req.body.officerNameInitial) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    if (!req.body.age) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    if (!req.body.gender) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    if (!req.body.recentOfficerRank) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    if (!req.body.mainServiceArea) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    if (req.body.password != req.body.confirmPassword) {
        res.status(400).send({ message: "Passwords do not Match" });
        req.body.confirmPassword = "";
        return;
    }
    // Create a officer
    var officer = new Officer({
        officer_Id: req.body.officer_Id,
        officerNameInitial: req.body.officerNameInitial,
        age: req.body.age,
        gender: req.body.gender,
        password: req.body.password,
        recentOfficerRank: req.body.recentOfficerRank,
        division: req.body.division,
        mainServiceArea: req.body.mainServiceArea,
        address: req.body.address,
        profilePicture: req.body.profilePicture,
    });

    // Save officer in the database
    officer
        .save(officer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the officer."
            });
        });
};

exports.officerLogin = (req, res) => {
    const officer_Id = req.body.officer_Id;
    const password = req.body.password;
    var condition = { officer_Id: officer_Id, password: password };
    Officer.find(condition)
        .then(data => {
            if (data.length == 0) {
                res.status(404).send({
                    message: "Officer not found"
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        });
};

exports.findById = (req, res) => {
    const id = req.query._id;
    Officer.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Officer not found with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Officer with id=" + id });
        });
};