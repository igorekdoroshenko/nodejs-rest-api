const express = require("express");

const ctrl = require('../../controllers/contacts')

const schemas = require('../../models/contact')
const {validateBody, updateBody, isValidId, authenticate} = require('../../middlewares')

const router = express.Router();

router.get("/", authenticate, ctrl.listContacts);

router.get("/:id", isValidId, ctrl.getContactById);

router.post(
  "/",
  authenticate,
  updateBody,
  validateBody(schemas.joiSchema),
  ctrl.addContact
);

router.delete("/:id", authenticate, isValidId, ctrl.removeContact);

router.put("/:id", authenticate, isValidId, updateBody, validateBody(schemas.joiSchema), ctrl.updateContact);

router.patch("/:id/favorite", authenticate, isValidId, updateBody, validateBody(schemas.favoriteJoiSchema), ctrl.updateFavorite);

module.exports = router;
