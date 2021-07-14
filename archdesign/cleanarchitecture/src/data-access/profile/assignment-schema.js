const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    profile: {type: mongoose.Types.ObjectId, required: true, ref: 'Profile'},
    module: {type: mongoose.Types.ObjectId, required: false, ref: 'Module'},
    option: {type: mongoose.Types.ObjectId, required: false, ref: 'Option'},
    command: {type: mongoose.Types.ObjectId, required: false, ref: 'Command'},
    canAccess: {type: Boolean, required: true, default: true},
    canExecute: {type: Boolean, required: true, default: true},
    status: {type: Number, required: true, default: 1},
    createdOn: {type: Date, default: new Date()},
    modifiedOn: {type: Date, default: new Date()},
});

module.exports = mongoose.model('Assignment', AssignmentSchema);
