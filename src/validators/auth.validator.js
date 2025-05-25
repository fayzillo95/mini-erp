import permissionModel from "../models/permission.model.js";
import userModel from "../models/user.model.js";
import AuthorizationError from "../utils/eroors/authorzation.error.js";
import CustomError from "../utils/eroors/custom.error.js";

export default class AuthValidation {
    constructor() { }

    static roleValidation(req, res, next, ...roles) {
        try {
            const user = userModel.findById({ _id: req.user.id })
            if (!user) {
                throw new CustomError(404, "User not found !")
            }
            if (!roles.includes(user.role)) {
                throw new AuthorizationError(401, "Not allowed ! ")
            }
            next()
        } catch (error) {
            next(error)
        }
    }
    static permissionValidation(req, res, next) {
        try {
            const user = userModel.findById({ _id: req.user.id })
            if (!user) {
                throw new CustomError(404, "User not found !")
            }
            const collection = req.url.split("/").at(-1)
            const permissions = permissionModel.findOne({
                user_id: user._id,
                model: collection,
                branch_id: req.body.branch_id
            })

            if (!permissions) throw new AuthorizationError(406, "User permission not found !")
            if (!permissions.actions.includes(req.method)) {
                throw new AuthorizationError(406, `${user.first_name} ${collection} ${req.method} not allowed !`)
            }
        } catch (error) {
            next(error)
        }
    }
}