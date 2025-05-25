import { generateToken } from "../../utils/genretors/generateToken.js"

export default (user) => {
    const secret = process.env.JWT_SECRET
    const result = generateToken(user)
    return result
}

