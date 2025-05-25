import 'dotenv/config';
import express from "express"
import db from './config/db.js';

const server = express()

server.use(express.json())

const application = async () => {
    const dbStatus = db()
    const port = process.env.PORT
    const host = process.env.HOST
    if (dbStatus) {
        server.listen(port,console.log(`http:${host}:${port}`))
    }else{
        console.log(dbStatus,"Internal server error !")
    }
}

application()