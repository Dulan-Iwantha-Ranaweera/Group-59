var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OfficerSchema = new Schema(
    {
        officer_Id: {
            type: String,
            unique: true,
        },

        officerNameInitial: String,

        age: String,

        gender: String,

        password: String,

        recentOfficerRank: String,

        division: String,

        mainServiceArea: String,

        address: String,

        profilePicture: String,

    },
    { timestamps: true }
);
OfficerSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
module.exports = mongoose.model('OfficerDb', OfficerSchema)