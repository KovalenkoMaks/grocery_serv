const { Schema } = require("mongoose");
const itemSchema = new Schema(
  {
    value: {
      type: String,
      minlength: 2,
      required: [true, "Set value for contact"],
    },
    quantity: {
      type: Number,
      required: [true, "Set quantity for contact"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

module.exports = itemSchema;
