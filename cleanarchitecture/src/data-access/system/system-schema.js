const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const SystemSchema = new Schema({
    name: {type: String, required: true, unique: true},
    photo: {type: String, required: false},
    company: {type: mongoose.Types.ObjectId, required: true, ref: 'Company'},
    modules: [{type: mongoose.Types.ObjectId, required: true, ref: 'Module'}],
    commands: [{type: mongoose.Types.ObjectId, required: true, ref: 'Command'}],
    roles: [{type: mongoose.Types.ObjectId, required: true, ref: 'Rol'}],
    photo: {type: String, required: false, default: 'defaultSystem.jpg'},
    averageCost: {type: Number, default: 0.0},
    status: {type: Number, required: true, default: 1},
    createdOn: {type: Date, default: new Date()},
    modifiedOn: {type: Date, default: new Date()},
});

// //reverse populate with virtuals
// SystemSchema.virtual('modules', {
//     ref: 'Module',
//     localField: '_id',
//     foreignField: 'system',
//     justOne: false,
// });

// SystemSchema.virtual('commands', {
//     ref: 'Command',
//     localField: '_id',
//     foreignField: 'system',
//     justOne: false,
// });

// SystemSchema.virtual('roles', {
//     ref: 'Rol',
//     localField: '_id',
//     foreignField: 'system',
//     justOne: false,
// });

SystemSchema.plugin(uniqueValidator);

module.exports = mongoose.model('System', SystemSchema);
