const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema(
    {
        startDate: {
            type: Date,
            required: true,

        },

        endDate: {
           type: Date,
           required: false,
         
        },

        

        location: {
            type: String,
            required: true,
        },

        results: {
           type: Number,
            required: true
        },

        notes: {
            type: String,

        }

    }
);

const ManageSessions = mongoose.model('ManageSessions', sessionSchema);

module.exports = ManageSessions; 