const express = require("express");
const ctrl = require("../../controllers/items");

const { tryCatchWrapper } = require("../../utils");
const { validateBody } = require("../../middelwares");
const schema = require("../../schemas");
const router = express.Router();

router.get("/:filter", tryCatchWrapper(ctrl.getAll));

router.post("/",
  validateBody(schema.addSchema),
  tryCatchWrapper(ctrl.add));

router.delete("/:itemId",
  // validateId,
  tryCatchWrapper(ctrl.remove));

router.put(
  "/:itemId",
  // validateId,
  // validateBody(schema.updateSchema),
  tryCatchWrapper(ctrl.updateById)
);

router.patch(
  "/:itemId/completed",
  // validateId,
  // validateBody(schema.favoriteSchema),
  tryCatchWrapper(ctrl.updateCompleted)
);

module.exports = router;
