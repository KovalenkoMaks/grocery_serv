const { NotFound } = require("http-errors");
const Item = require("../../models/item");
// const Item = require("../../models/contact");

const remove = async (req, res, next) => {
  const { itemId } = req.params;
  const result = await Item.findByIdAndRemove(itemId);
  if (!result) {
    throw new NotFound("Not found");
  }
  res.json({
    message: "item deleted",
  });
};

module.exports = remove;
