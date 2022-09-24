import * as winston from 'winston';
const commonConfig = {
  format: winston.format.json(),
  transports: [new winston.transports.Console({})],
};
const productionLogger = winston.createLogger({
  level: 'info',
  ...commonConfig,
});
const developmentLogger = winston.createLogger({
  level: 'debug',
  ...commonConfig,
});
export default process.env.NODE_ENV === 'development' ? developmentLogger : productionLogger;
