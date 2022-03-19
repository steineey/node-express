import * as express from 'express';
import { Application } from 'express';
import { Logger } from 'winston';
import IController from './IController.interface';
import AppLogger from './AppLogger';

class AppServer {

  public app: Application;
  public logger: Logger;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    const appLogger = new AppLogger();
    this.app.use(appLogger.logRequest);
    this.app.use(appLogger.logError);
    this.logger = appLogger.getInstance();
  }

  public addController(controllers: Array<IController>) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      this.logger.info(`app server listen on port ${this.port}`);
    });
  }
}

export default AppServer;