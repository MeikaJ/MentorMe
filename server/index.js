//import express from 'express';
const express = require('express')
import db from './config/db'
import middlewareConfig from "./config/middleware"
import middleware from './config/middleware';
import { MeetingRoutes, GroupRoutes } from './modules'


const app = express();
// database placeholder

db();
// middleware

middlewareConfig(app);
app.use('/api', [MeetingRoutes, GroupRoutes]);

const PORT = process.env.PORT || 8080;

app.listen(PORT, err => {
  if (err) {
    console.log("error")
  } else {
    console.log(`App listen to port:${PORT}`);
  }
})