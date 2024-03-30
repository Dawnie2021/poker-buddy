const { Schema, model } = require('mongoose');


const sessionSchema = new Schema(
    {
    date: {
        type: Date,
        required: true,
        
    },

    location: {
        type: String,
        required: true,
    },

    results: {
        buy_in: {
            type: Number,
            required: true
        },
        cash_out: {
            type: Number,
            required: true
        },
        profit: {
            type: Number,
            required: true
        }
    },

    notes: {
        type: String,

    }

}
);

const ManageSessions = model('ManageSessions', sessionSchema);

module.exports = ManageSessions; 