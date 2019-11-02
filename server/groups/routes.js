var router = express.Router();
var GroupController = require('./controller');

const routes = new Router();
routes.post('/groups/new', GroupController.createGroup);

export default routes;