var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FinesSchema = new Schema(
    {
        licenceNumber: {
            type: String,
            unique: true,
        },

        surName: String,

        date: String,

        email: {
            type: String,
            unique: true,
        },

        typeOfFine: String,

        fineAmount: String,

        driverId: {
            type: Schema.Types.ObjectId,
            ref: 'DriverDb'
        },

        paid: Boolean,

        paymentSlip: String,

    },
    { timestamps: true }
);
FinesSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
module.exports = mongoose.model('FineDb', FinesSchema)