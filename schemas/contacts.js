const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `Missing required name field`,
  }),

  email: Joi.string().required().messages({
    "any.required": `Missing required email field`,
  }),

  phone: Joi.string().required().messages({
    "any.required": `Missing required phone field`,
  }),
});

const updateSchema = Joi.object({
  name: Joi.string().messages({
    "any.required": "missing required name field",
  }),
  email: Joi.string().messages({
    "any.required": "missing required email field",
  }),
  phone: Joi.string().messages({
    "any.required": "missing required phone field",
  }),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "any.required": "missing required field favorite" }),
});

module.exports = { addSchema, updateSchema, updateFavoriteSchema };
