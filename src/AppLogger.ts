import { transports, createLogger, Logger, format } from 'winston';
import { Request, Response, NextFunction } from 'express';
const { combine, timestamp, json } = format;

class AppLogger {

  public instance: Logger;

  constructor() {
    this.instance = createLogger({
      level: 'info',
      format: combine(timestamp(), json()),
      transports: [new transports.Console()]
    });
  }

  public getInstance(): Logger {
    return this.instance;
  }

  public logRequest = (req: Request, res: Response, next: NextFunction) => {
    this.instance.info(`request => '${req.url}'`);
    next();
  }

  public logError = (err: string, req: Request, res: Response, next: NextFunction) => {
    this.instance.error(err);
    next();
  }
}

export default AppLogger;