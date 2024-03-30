const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema(
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

        hoursPlayed: {
            type: Number,
            required: true,
        },

        notes: {
            type: String,

        }

    }
);

const ManageSessions = mongoose.model('ManageSessions', sessionSchema);

module.exports = ManageSessions; 