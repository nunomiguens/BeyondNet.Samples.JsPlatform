const buildLocation = locations => {
    if (!locations.length) return null;

    return {
        type: 'Point',
        coordinates: [locations[0].longitude, locations[0].latitude],
        formattedAddress: locations[0].fomattedAddress,
        country: locations[0].country,
        countryCode: locations[0].countryCode,
        city: locations[0].city,
        streetName: locations[0].streetName,
        streetNumber: locations[0].streetNumber,
        administrativeLevels: {
            evel1long: locations[0].evel1long,
            level1short: locations[0].level1short,
            level2long: locations[0].level2long,
            level2short: locations[0].level2short,
        },
        provider: locations[0].provider,
    };
};

module.exports = buildLocation;
