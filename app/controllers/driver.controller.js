const Driver = require("../models/driver.model");
var request = require('request');


// Create and Save a new Driver
exports.create = (req, res) => {
    // Validate request
    if (!req.body.driverName) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    if (!req.body.licenceNumber) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    if (!req.body.address) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    if (!req.body.email) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    if (!req.body.phoneNumber) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    if (req.body.password != req.body.confirmPassword) {
        res.status(400).send({ message: "Passwords do not Match" });
        req.body.confirmPassword = "";
        return;
    }
    // Create a driver
    var driver = new Driver({
        driverName: req.body.driverName,
        licenceNumber: req.body.licenceNumber,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        noOfFines: req.body.noOfFines,
    });
    // Save Driver in the database
    driver
        .save(driver)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the driver."
            });
        });
};

exports.driverLogin = (req, res) => {
    const licenceNumber = req.body.licenceNumber;
    const password = req.body.password;
    var condition = { licenceNumber: licenceNumber, password: password};
    Driver.find(condition)
        .then(data => {
            if(data.length == 0){
                res.status(404).send({
                    message: "Driver not found"
                });
            }else{
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
    Driver.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Driver not found with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Driver with id=" + id });
        });
};