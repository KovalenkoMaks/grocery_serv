const express = require("express");
const ctrl = require("../../controllers/items");

const { tryCatchWrapper } = require("../../utils");
const { validateId } = require("../../middelwares");
const router = express.Router();

router.get("/:filter", tryCatchWrapper(ctrl.getAll));

router.post("/",
  tryCatchWrapper(ctrl.add));

router.delete("/:itemId",
  validateId,
  tryCatchWrapper(ctrl.remove));

router.put(
  "/:itemId",
  validateId,
  tryCatchWrapper(ctrl.updateById)
);

router.patch(
  "/:itemId/completed",
  validateId,
  tryCatchWrapper(ctrl.updateCompleted)
);

module.exports = router;
