import express from 'express';
import dbConfig from './config/db'



const app = express();
// database placeholder

dbConfig();

const PORT = process.env.PORT || 8080;

app.listen(PORT, err => {
    if (err) {
        console.log("error")
    } {
        console.log(`App listen to port:${PORT}`);
    }
}) 