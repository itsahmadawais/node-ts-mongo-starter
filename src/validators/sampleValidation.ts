import Joi from 'joi';
import { objectIdValidator } from '../utils';

export const ampleValidationSchema = Joi.object({
    organization: Joi.string().custom(objectIdValidator).required(),
    name: Joi.string().required()
});