import 'dotenv/config'
// import sendVerifikatsiy from './utils/genretors/sendMail.js'
// import { logger } from './utils/genretors/logger.js'
// import { decodeToken } from './utils/genretors/generateToken.js'
// import JWT from "jsonwebtoken"
// import jwtMIdllwares from './middlewares/responsehandlers/jwtMIdllwares.js'


// const user = {username:"Fayzillo",id:"cdwfawewaceawcewcaeda"}
// const token = jwtMIdllwares(user)

// const url = `http://${process.env.HOST}:${process.env.PORT}/${token.accessToken}`
// const refurl = `http://${process.env.HOST}:${process.env.PORT}/${token.refreshToken}`

    const url = process.env.MONGO_URI
    console.log(url)
// console.log(url)
// console.log(refurl)

// console.log(sendVerifikatsiy("fayzillo@gmail.com",url, refurl))

// const decodeuser = decodeToken(token.accessToken)

// console.log(token)
// console.log(decodeuser)


