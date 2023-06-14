const { model } = require("mongoose");
const { itemSchema } = require("../schemas");

const Item = model("items", itemSchema);

module.exports = Item; 
