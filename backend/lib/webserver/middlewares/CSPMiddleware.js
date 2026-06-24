/**
 *
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 */
module.exports = function addCSPHeader(req, res, next) {
    res.header("Content-Security-Policy", "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; worker-src 'self';");
    next();
};
