const { isObjectValidId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
    const { id } = req.params;
    if (!isObjectValidId(id)) {
        next(HttpError(400, `${id} is not valid id`))
    }
    next();
}

module.exports = isValidId;