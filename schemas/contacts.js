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
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
});

module.exports = { addSchema, updateSchema, };
