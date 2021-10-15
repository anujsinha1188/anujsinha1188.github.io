const winston = require("winston");
const loginfo = {
    transports: [
        new winston.transports.File({
            filename: "test.log"
        })
    ]
};
const logger = winston.createLogger(loginfo);
logger.info("Server started");
