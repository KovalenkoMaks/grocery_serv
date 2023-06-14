const { model } = require("mongoose");
const { contactSchema } = require("../schemas");

const Contact = model("items", contactSchema);

module.exports = Contact;
