const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ModuleSchema = new Schema({
    name: {type: String, required: true},
    system: {type: mongoose.Types.ObjectId, required: true, ref: 'System'},
    options: [{type: mongoose.Types.ObjectId, require: true, ref: 'Option'}],
    status: {type: Number, required: true, default: 1},
    createdOn: {type: Date, default: new Date()},
    modifiedOn: {type: Date, default: new Date()},
});

// //reverse populate with virtuals
// ModuleSchema.virtual('options', {
//     ref: 'Option',
//     localField: '_id',
//     foreignField: 'module',
//     justOne: false,
// });

module.exports = mongoose.model('Module', ModuleSchema);
