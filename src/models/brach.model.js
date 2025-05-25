// role.model.js - Placeholder content

import { model, Schema } from "mongoose";

export default model("Branch", new Schema({
    name: {
        type: String,
        RegExp: /^[A-Za-z]+$/,
        required: true
    }
}))