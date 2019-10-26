import { Router } from 'express';
import * as MeetController from './controller';


const routes = new Router();

routes.get('./meeting', MeetController.getAllMeetups);

routes.post('./meeting', MeetController.createMeeting);

export default routes;