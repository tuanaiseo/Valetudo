const path = require("path");

module.exports = function eggTermHandler(req, res, next) {
    if (req.headers.authorization === "Basic " + Buffer.from(process.env.EGG_TERM_USERNAME + ":" + process.env.EGG_TERM_PASSWORD).toString("base64")) {
        if (req.url === "/") {
            return res.status(418).sendFile(path.join(__dirname, "res", "egg_term.html"));
        } else {
            return res.sendStatus(404);
        }
    }

    next();
};
