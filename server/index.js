import express from 'express';
import dbConfig from './config/db'
import middlewareConfig from "./config/middleware"
import middleware from './config/middleware';



const app = express();
// database placeholder

dbConfig();

// middleware

middlewareConfig(app);


const PORT = process.env.PORT || 8080;

app.listen(PORT, err => {
    if (err) {
        console.log("error")
    } {
        console.log(`App listen to port:${PORT}`);
    }
}) 