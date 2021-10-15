const winston = require("winston");
const loginfo = { transports: [new winston.transports.Console()] };
const logger = winston.createLogger(loginfo);
logger.log({ message: "Server started", level: "info" });
logger.info("Server Started"); // same as above