import mongoose from "mongoose";

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost:27017/mentorMe", { useNewUrlParser: true });
    mongoose.connection
        .once('open', () => console.log('running mongodb'))
        .on('error', err => console.error(err));
};
