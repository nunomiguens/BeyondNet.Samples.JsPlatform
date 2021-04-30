const buildRequest = req => {
    return {
        body: req.body,
        query: Object.values(req.query).length ? buildQuery(req) : req.query,
        params: req.params,
        user: req.user,
        ip: req.ip,
        method: req.method,
        path: req.path,
        files: req.files,
        protocol: req.protocol,
        host: req.get('host'),
        headers: {
            'Content-Type': req.get('Content-Type'),
            Referer: req.get('referer'),
            'User-Agent': req.get('User-Agent'),
        },
    };

    function buildQuery(req) {
        const removeFields = ['select', 'sort', 'page', 'limit'];

        const reqQuery = {...req.query};

        removeFields.forEach(param => delete reqQuery[param]);

        let queryStr = JSON.stringify(reqQuery);

        queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

        return JSON.parse(queryStr);
    }
};

module.exports = buildRequest;
