import { logger } from "./utils/genretors/logger.js";

try {
    davdoa()    
} catch (error) {
    logger.info("User logs");
    logger.error(error.message,error.stack);
}