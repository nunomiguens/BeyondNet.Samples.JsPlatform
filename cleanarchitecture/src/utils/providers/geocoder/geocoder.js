const nodeGeocoder = require('node-geocoder');

const buildLocation = require('./pure-functions');

const makeGeocoderProvider = ({options, coder}) => {
    return Object.freeze({
        provide,
    });

    async function provide(address) {
        if (!address.length) return coder.BadRequest(`The text ${address} cannot be used`);

        try {
            const locations = await nodeGeocoder(options).geocode(address);

            return buildLocation(locations);
        } catch (err) {
            return coder.InternalServerError(err.message);
        }
    }
};

module.exports = makeGeocoderProvider;
