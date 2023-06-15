const Contact = require("../../models/item.js");
const getAll = async (req, res) => {
  const { filter } = req.params;
  let result
  switch (filter) {
    case 'completed':
      result = await Contact.find({ completed: true });
      break;
    case 'active':
      result = await Contact.find({ completed: false });
      break;

    default:
      result = await Contact.find();

      break;
  }
  res.json(result);
};

module.exports = getAll;
