var mongoose = require('mongoose');

var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        referenceKey: {type: String, required: false},
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        resetPasswordToken: {type: String},
        resetPasswordExpire: {type: Date},
        phone: {type: String, required: false},
        activePeriod: {
            from: {type: String, required: false},
            to: {type: String, required: false},
        },
        skills: {type: [String], required: false},
        avatar: {type: String, required: false},
        social: {
            youtube: {type: String, required: false},
            twitter: {type: String, required: false},
            github: {type: String, required: false},
            linkedin: {type: String, required: false},
            facebook: {type: String, required: false},
            instagram: {type: String, required: false},
        },
        addresses: [{type: mongoose.Types.ObjectId, required: false, ref: 'Address'}],
        profiles: [{type: mongoose.Types.ObjectId, required: false, ref: 'Profile'}],
        averageCost: {type: Number, default: 0.0},
        status: {type: Number, required: true, default: 1},
        createDate: {type: Date, default: Date.now},
        modifiedOn: {type: Date, default: Date.now},
    },
    {
        toJSON: {virtuals: true},
        toObject: {virtuals: true},
    }
);

// //reverse populate with virtuals
// UserSchema.virtual('addresses', {
//     ref: 'Address',
//     localField: '_id',
//     foreignField: 'user',
//     justOne: false,
// });

// UserSchema.virtual('profiles', {
//     ref: 'Profile',
//     localField: '_id',
//     foreignField: 'profile',
//     justOne: false,
// });

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);
