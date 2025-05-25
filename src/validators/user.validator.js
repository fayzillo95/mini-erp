// user.validator.js - Placeholder content

import Joi from "joi";
import { namRegex } from "../utils/resurs/modelComponentes/checkBirtday.js";

export default class UserValidations {
    constructor() {}
    
    static registerValidation(payload) {
        const userSchema = Joi.object({
            first_name:Joi.string().pattern(namRegex).required(),
            last_name:Joi.string().pattern(namRegex),
            email:Joi.string().email().required(),
            password:Joi.string().min(8).max(32)
        })
    }
}




// export default model("User", new Schema({
//     first_name:{
//         type:String, 
//         match:namRegex,
//         required:true,
//     },
//     last_name:{
//         type:String, 
//         match:namRegex,
//         required:true,
//     },
//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     profile_img:{
//         type:String
//     },
//     birth_day:{
//         type:String,
//         required:true
//     }
// }))