const express = require("express");

const ctrl = require('../../controllers/contacts')

const schemas = require('../../schemas/contacts')
const {validateBody, updateBody} = require('../../middlewares')

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:id", ctrl.getContactById);

router.post("/", updateBody, validateBody(schemas.addSchema), ctrl.addContact);

router.put(
  "/:id",
  updateBody, validateBody(schemas.addSchema),
  ctrl.updateContact
);

router.delete("/:id", ctrl.removeContact);

module.exports = router;
