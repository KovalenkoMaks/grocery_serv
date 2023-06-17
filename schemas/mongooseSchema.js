const { Schema } = require("mongoose");
const itemSchema = new Schema(
  {
    value: {
      type: String,
      minlength: 2,
      required: [true, "Set value for item"],
    },
    quantity: {
      type: Number,
      required: [true, "Set quantity for item"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    user: {
      type: String,
      required: [true, "Set user for item"],
    }
  },
  { versionKey: false }
);

module.exports = itemSchema;
