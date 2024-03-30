const { Schema, model } = require('mongoose');


const sessionSchema = new Schema(
    {
    date: {
        type: String,
        required: true,
    },

    location: {
        type: String,
    },

    results: {
        type: Number,
        required: true,
    },

    notes: {
        type: String,

    }

}
);

const ManageSessions = model('ManageSessions', sessionSchema);

module.exports = ManageSessions; 