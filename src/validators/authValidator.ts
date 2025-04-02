import Joi from 'joi';

export const signupPayloadValidator = Joi.object({
    email: Joi.string().email().required(),  // Email must be a valid email and required
    password: Joi.string().min(6).required(),  // Password must be a string, at least 6 characters long, and required
});


export const loginPayloadValidator = Joi.object({
    email: Joi.string().email().required(),  // Email must be a valid email and required
    password: Joi.string().required(),
});
