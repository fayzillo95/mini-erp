import { decodeToken } from "../../utils/genretors/generateToken.js"


export default (token) => {
    try {
        const user = decodeToken(token)
        return user
    } catch (error) {
        return error        
    }
}