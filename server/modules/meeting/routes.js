import { Router } from 'express';
import * as MeetController from './controller';


const routes = new Router();


routes.post('./meeting', MeetController.createMeeting);

export default routes;