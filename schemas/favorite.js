const Joi = require("joi");

const favoriteSchema = Joi.object({
  comleted: Joi.boolean().valid().default(false),
});

module.exports = favoriteSchema;
