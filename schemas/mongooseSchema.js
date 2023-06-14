const { Schema } = require("mongoose");
const itemSchema = new Schema(
  {
    value: {
      type: String,
      minlength: 2,
      required: [true, "Set name for contact"],
    },
    quantity: {
      type: Number,
      required: [true, "Set email for contact"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

module.exports = itemSchema;
