// user.validator.js - Placeholder content

import Joi from "joi";
import { actions, birthdayTest, models, namRegex } from "../utils/resurs/modelComponentes/userComponentes.js";
import { isValidObjectId } from 'mongoose'
import CustomError from "../utils/eroors/custom.error.js";

function isObjectId(value, helpers) {
    if (isValidObjectId(value)) {
        return value
    }
    return helpers.message("Invalid id | -> ", + value)
}

function isDate(value, helpers) {
    try {
        if (birthdayTest(value)) {
            return value
        } else {
            throw new Error("Invalid birthday !")
        }
    } catch (error) {
        return helpers(error.message)
    }
}

export default class Validations {
    constructor() { }

    static registerValidation(payload) {
        const userSchema = Joi.object({
            first_name: Joi.string().pattern(namRegex).required(),
            last_name: Joi.string().pattern(namRegex),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(32),
            r_password: Joi.ref('password'),
            birth_day: Joi.string().custom(isDate).required()
        })
        return userSchema.validate(payload, {
            abortEarly: false,
            convert: false
        })
    }

    static loginValidation(payload) {
        const loginSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(32).required(),
            r_password: Joi.ref('password')
        })
        return loginSchema.validate(payload, {
            abortEarly: false,
            convert: false
        })
    }
    static permissionValidation(payload) {
        let permissionSchema = Joi.object({
            user_id: Joi.string().custom(isObjectId).required(),
            branch_id: Joi.string().custom(isObjectId).required(),
            actions: Joi.string().valid(...actions).required(),
            model: Joi.string().valid(...models)
        })
        return permissionSchema.validate(payload, {
            abortEarly: false,
            convert: false
        })
    }
    static branchValidation(payload) {
        const branchSchema = Joi.object({
            name: Joi.string().min(6).pattern(/^[A-Z' -]+$/).required(),
            adress: Joi.string().required()
        })
        return branchSchema.validate(payload, {
            abortEarly: false,
            convert: false
        })
    }
}

