import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, err => {
    if (err) {
        console.log("error")
    } {
        console.log(`App listen to port:${PORT} `);
    }
}) 