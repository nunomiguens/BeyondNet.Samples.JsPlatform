const ResultTypes = {
    ERROR: 'ERROR',
    DATA: 'DATA',
};

class Result {
    constructor(raw) {
        this.type = raw.type || ResultTypes.DATA;
        this.code = raw.code;
        this.name = raw.name;
        this.payload = raw.payload || {success: true, data: {}};
    }
}

exports.ResultTypes = ResultTypes;
exports.Result = Result;
