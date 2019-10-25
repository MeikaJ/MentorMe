import mongoose, { schema } from 'mongoose';
const meetSchema = new Schema({
    title: {
        type: string,
        require: true
    },
    description: {

        type: string,
        require: true
    }
})
export default mongoose.model('meetup', meetSchema);