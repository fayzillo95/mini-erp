import CustomError from "../../utils/eroors/custom.error.js"
import Validations from "../../utils/validators/user.validator.js"

/**
 * @function
 * @param {Request} req 
 * @param {Response} res 
 * @param {Function} next 
 */
export const logintest =  (req, res, next) => {
    try {
        if(!req.body) throw new CustomError(400,"Invalid data empty body !")
        const {error} = Validations.loginValidation(req.body)
        if(error){
            throw new CustomError(400,error.details.join(" | ") + "  !")
        }
        next()
    } catch (error) {
        next(error)
    }
}
/**
 * @function
 * @param {Request} req 
 * @param {Response} res 
 * @param {Function} next 
 */
export const registertest =  (req, res, next) => {
    try {
        if(!req.body) throw new CustomError(400,"Invalid data empty body !")
        const {error} = Validations.registerValidation(req.body)
        if(error){
            throw new CustomError(400,error.details.join(" | ") + "  !")
        }
        next()
    } catch (error) {
        next(error)
    }
}
/**
 * @function
 * @param {Request} req 
 * @param {Response} res 
 * @param {Function} next 
 */
export const permissiontest =  (req, res, next) => {
    try {
        if(!req.body) throw new CustomError(400,"Invalid data empty body !")
        const {error} = Validations.permissionValidation(req.body)
        if(error){
            throw new CustomError(400,error.details.join(" | ") + "  !")
        }
        next()
    } catch (error) {
        next(error)
    }
}
/**
 * @function
 * @param {Request} req 
 * @param {Response} res 
 * @param {Function} next
 * // express midllwares 
 * // validation body 
 */
export const branchtest =  (req, res, next) => {
    try {
        if(!req.body) throw new CustomError(400,"Invalid data empty body !")
        const {error} = Validations.branchValidation(req.body)
        if(error){
            throw new CustomError(400,error.details.join(" | ") + "  !")
        }
        next()
    } catch (error) {
        next(error)
    }
}