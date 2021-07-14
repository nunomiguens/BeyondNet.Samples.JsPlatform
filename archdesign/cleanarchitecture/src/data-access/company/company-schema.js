const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    name: {type: String, required: true, unique: true, trim: true},
    slug: {type: String, required: false, trim: true},
    status: {type: Number, required: true, default: 1},
    systems: [{type: mongoose.Types.ObjectId, require: true, ref: 'System'}],
    createdOn: {type: Date, default: new Date().toISOString()},
    modifiedOn: {type: Date, default: new Date().toISOString()},
});

CompanySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Company', CompanySchema);
