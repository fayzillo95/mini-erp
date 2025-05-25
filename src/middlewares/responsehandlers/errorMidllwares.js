import { logger } from "../../utils/genretors/logger.js"

export default (err, req, res, next) => {
    if (err.status) {
        logger.info(err.message)
        return res.status(err.status).json({
            success: false,
            status: err.status,
            message: err.message
        })
    }

    logger.error(err.message,err.stack)
    return res.status(err.status).json({
        success: false,
        status: 500,
        message: "Internal server error !"
    })
}