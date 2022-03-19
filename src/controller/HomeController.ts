import { Router, Request, Response } from 'express';
import IControllerBase from '../IController.interface';

class HomeController implements IControllerBase {

  public router: Router;

  constructor() {
    this.router = Router();
    this.initRoutes()
  }

  public initRoutes() {
    this.router.get('/', this.helloFromServer)
  }

  public helloFromServer(req: Request, res: Response) {
    res.send("server is running...");
  }
}

export default HomeController