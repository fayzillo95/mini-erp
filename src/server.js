import 'dotenv/config';
import express from "express"

const server = express()

server.use(express.json())

const application = async () => {
    const dbStatus = ""
    const port = process.env.PORT
    const host = process.env.HOST
    if (dbStatus) {
        server.listen(port,console.log(`http:${host}:${port}`))
    }else{
        console.log(dbStatus,"Internal server error !")
    }
}