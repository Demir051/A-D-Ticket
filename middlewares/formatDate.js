function formatDateMiddleware(req, res, next) {
    res.locals.formatDate = function (dateString) {
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    next();
}

module.exports = formatDateMiddleware;