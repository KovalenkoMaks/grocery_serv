const Contact = require("../../models/item.js");
const getAll = async (req, res) => {
  const { filter } = req.params;
  const { user } = req.query;
  let result
  switch (filter) {
    case 'completed':
      result = await Contact.find({ completed: true, user: user });

      break;
    case 'active':
      result = await Contact.find({ completed: false, user: user });
      break;

    default:
      result = await Contact.find({ user: user });
      break;
  }
  res.json(result);
};

module.exports = getAll;
