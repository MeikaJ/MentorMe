import mongoose from "mongoose";

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongod://localhost/mentorMe');
    mongoose.connection()
        .once('open', () => console.log('running mongodb'))
        .on('error', err => console.error(err));
};