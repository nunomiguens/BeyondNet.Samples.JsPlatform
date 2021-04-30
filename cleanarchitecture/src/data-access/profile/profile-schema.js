const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {type: mongoose.Types.ObjectId, required: true, ref: 'User'},
    system: {type: mongoose.Types.ObjectId, required: true, ref: 'System'},
    rol: {type: mongoose.Types.ObjectId, required: true, ref: 'Rol'},
    description: {type: String, required: false},
    current: {type: Boolean, default: true},
    cost: {type: Number, default: 0.0},
    assignments: [{type: mongoose.Types.ObjectId, require: true, ref: 'Assignment'}],
    status: {type: Number, required: true, default: 1},
    createdOn: {type: Date, default: new Date()},
    modifiedOn: {type: Date, default: new Date()},
});

// //reverse populate with virtuals
// ProfileSchema.virtual('assignments', {
//     ref: 'Assignment',
//     localField: '_id',
//     foreignField: 'profile',
//     justOne: false,
// });

//cascade delete
ProfileSchema.pre('remove', async function(next) {
    await this.model('Assignment').deleteMany({profile: this._id});
    next();
});

//Static method to get average
ProfileSchema.statics.getAverageCost = async function(profileId) {
    const obj = await this.aggregate([
        {
            $match: {profile: profileId},
        },
        {
            $group: {
                _id: '$profile',
                averageCost: {$avg: '$cost'},
            },
        },
    ]);

    try {
        await this.model('Profile').findByIdAndUpdate(profileId, {
            averageCost: Math.ceil(obj[0].averageCost / 10) * 10,
        });
    } catch (err) {
        console.log(err);
    }
};

// Call getAverageCost by System / User after save
ProfileSchema.post('save', function() {
    this.constructor.getAverageCost(this.profile);
});

// Call getAverageCost by System / User before remove
ProfileSchema.pre('remove', function() {
    this.constructor.getAverageCost(this.profile);
});

module.exports = mongoose.model('Profile', ProfileSchema);
