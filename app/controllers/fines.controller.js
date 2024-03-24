const Fines = require("../models/fines.model");
var request = require('request');


// Create and Save a new Fines
exports.create = (req, res) => {
    // Validate request
    if (!req.body.surName) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    if (!req.body.date) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    if (!req.body.email) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    if (!req.body.typeOfFine) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    if (!req.body.fineAmount) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Fines
    var fine = new Fines({
        licenceNumber: req.body.licenceNumber,
        surName: req.body.surName,
        date: req.body.date,
        email: req.body.email,
        typeOfFine: req.body.typeOfFine,
        driverId: req.body.driverId,
        paid: req.body.paid,
        paymentSlip: req.body.paymentSlip,
    });
    // Save fine in the database
    fine
        .save(fine)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the fine."
            });
        });
};

exports.getAllFines = (req, res) => {
    const paid = decodeURI(req.query.paid);
    var condition = { paid: paid};
    Fines.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Fines."
            });
        });
};

exports.updateFineById = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.query.id;
    Fines.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Fines with id=${id}. Maybe Fine was not found!`
                });
            } else res.send({ message: "Fine updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Fine with id=" + id
            });
        });
};

exports.deleteFineById = (req, res) => {
    const id = req.query.id;
    Fines.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Fine with id=${id}. Maybe Fine was not found!`
                });
            } else {
                res.send({
                    message: "Fine deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Fine with id=" + id
            });
        });
};