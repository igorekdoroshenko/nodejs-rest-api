const express = require("express");
const ctrl = require("../../controllers/auth");

const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/users");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.registerSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logOut);

router.patch("/", authenticate, validateBody(schemas.loginSchema), ctrl.updateSubscriptionUser);

module.exports = router;