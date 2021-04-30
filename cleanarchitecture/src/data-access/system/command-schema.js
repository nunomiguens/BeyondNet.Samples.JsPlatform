const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommandSchema = new Schema({
    name: {type: String, required: true},
    system: {type: mongoose.Types.ObjectId, required: true, ref: 'System'},
    status: {type: Number, required: true, default: 1},
    createdOn: {type: Date, default: new Date()},
    modifiedOn: {type: Date, default: new Date()},
});

module.exports = mongoose.model('Command', CommandSchema);
