import Joi from 'joi';
import { objectIdValidator } from '@/utils';

export const sampleValidationSchema = Joi.object({
    organization: Joi.string().custom(objectIdValidator).required(),
    name: Joi.string().required()
});