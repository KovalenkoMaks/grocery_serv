const addSchema = require("./add");
const updateSchema = require("./update");
const itemSchema = require("./mongooseSchema");
const favoriteSchema = require("./favorite");
module.exports = {
  addSchema,
  updateSchema,
  itemSchema,
  favoriteSchema,
};
