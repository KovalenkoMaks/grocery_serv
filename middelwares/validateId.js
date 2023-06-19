const { isValidObjectId } = require("mongoose");
const { requestError } = require("../utils");
const validateId = (req, _, next) => {
  const { itemId } = req.params;
  if (!isValidObjectId(itemId)) {
    next(requestError(400, `${itemId} is not valid id`));
  }
  next();
};

module.exports = validateId;
