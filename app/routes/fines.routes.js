module.exports = app => {
    const fines = require("../controllers/fines.controller");
    var router = require("express").Router();

    //create user
    router.post("/create", fines.create);
    // Retrieve paid and non-paid fines
    router.get("/getAllFines", fines.getAllFines);
    // Update a Fines by id
    router.put("/updateFinesById", fines.updateFineById);
    // Delete a Fines by id
    router.delete("/deleteFinesById", fines.deleteFineById);

    
    app.use('/api/fines', router);
};