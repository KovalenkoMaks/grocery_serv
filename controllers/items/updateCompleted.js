const Item = require("../../models/item");
const { NotFound } = require("http-errors");

const updateCompleted = async (req, res, next) => {
  const { itemId } = req.params;
  const result = await Item.findByIdAndUpdate(itemId, req.body, {
    new: true,
  });
  if (!result) {
    throw new NotFound("Not found");
  }
  res.status(200).json(result);
};

module.exports = updateCompleted;
