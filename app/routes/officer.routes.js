module.exports = app => {
    const officers = require("../controllers/officer.controller");
    var router = require("express").Router();

    //create user
    router.post("/create", officers.create);
    //login user (Officer)
    router.post("/officerLogin", officers.officerLogin);
    // Retrieve a single officer by id
    router.get("/officerById", officers.findById);


    app.use('/api/officer', router);
};