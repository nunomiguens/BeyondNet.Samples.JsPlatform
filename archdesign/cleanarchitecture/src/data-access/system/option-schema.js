const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OptionSchema = new Schema({
    name: {type: String, required: true},
    module: {type: mongoose.Types.ObjectId, required: true, ref: 'Module'},
    status: {type: Number, required: true, default: 1},
    createdOn: {type: Date, default: new Date()},
    modifiedOn: {type: Date, default: new Date()},
});

module.exports = mongoose.model('Option', OptionSchema);
