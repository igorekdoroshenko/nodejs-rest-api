const express = require("express");

const ctrl = require('../../controllers/contacts')

const schemas = require('../../schemas/contacts')
const {validateBody, updateBody, isValidId} = require('../../middlewares')

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:id", isValidId, ctrl.getContactById);

router.post("/", updateBody, validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:id", isValidId, ctrl.removeContact);

router.put(
  "/:id",
  isValidId, updateBody,
  validateBody(schemas.updateSchema),
  ctrl.updateContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  updateBody,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
