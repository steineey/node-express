import AppServer from './AppServer';
import HomeController from './controller/HomeController';

const appServer = new AppServer(Number(process.env.PORT) || 3000);
appServer.addController([new HomeController()]);
appServer.listen();