const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    user: {type: mongoose.Types.ObjectId, required: true, ref: 'User'},
    address: {type: String, required: true},
    location: {
        // GeoJSON Point
        type: {
            type: String,
            enum: ['Point'],
        },
        coordinates: {
            type: [Number],
            index: '2dsphere',
        },
        formattedAddress: {
            type: String,
            default: null,
        },
        streetName: {
            type: String,
            default: null,
        },
        city: {
            type: String,
            default: null,
        },
        state: {
            type: String,
            default: null,
        },
        zipcode: {
            type: String,
            default: null,
        },
        country: {
            type: String,
            default: null,
        },
    },
    status: {type: String, required: true, default: 1},
    createDate: {type: Date, default: Date.now},
    modifiedOn: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Address', AddressSchema);
