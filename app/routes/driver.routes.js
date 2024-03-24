module.exports = app => {
    const drivers = require("../controllers/driver.controller");
    var router = require("express").Router();

    //create user
    router.post("/create", drivers.create);
    //login user (Driver)
    router.post("/driverLogin", drivers.driverLogin);
    // Retrieve a single driver by id
    router.get("/driverById", drivers.findById);


    app.use('/api/driver', router);
};