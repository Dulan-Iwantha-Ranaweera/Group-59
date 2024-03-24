var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DriverSchema = new Schema(
    {
        driverName: String,

        licenceNumber: {
            type: String,
            unique: true,
        },

        password: String,

        address: String,

        email: {
            type: String,
            unique: true,
        },

        phoneNumber: {
            type: String,
            unique: true,
        },

        noOfFines: String,
    },
    { timestamps: true }
);
DriverSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
module.exports = mongoose.model('DriverDb', DriverSchema)