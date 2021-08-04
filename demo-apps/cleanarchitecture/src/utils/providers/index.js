const {coderHelper} = require('../helpers');

const geocoderOptions = {
    provider: process.env.GEOCODER_PROVIDER,
    httpAdapter: process.env.GEOCODER_ADAPTER,
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: process.env.GEOCODER_FORMATTER,
};

const makeGeocoderProvider = require('./geocoder');
const geocoderProvider = makeGeocoderProvider({options: geocoderOptions, coder: coderHelper});

const sluggerOptions = {
    replacement: '-',
    remove: undefined,
    lower: false,
    strict: false,
};

const makeSluggerProvider = require('./slugger');
const slugProvider = makeSluggerProvider({options: sluggerOptions, coder: coderHelper});

exports.geocoderProvider = geocoderProvider;
exports.slugProvider = slugProvider;
