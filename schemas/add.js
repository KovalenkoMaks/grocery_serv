const Joi = require("joi");

const addSchema = Joi.object({
  value: Joi.string().required(),
  quantity: Joi.number().required,
  completed: Joi.boolean(),
});

module.exports = addSchema;
