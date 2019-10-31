import mongoose, { schema } from 'mongoose';
var meetSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: {

    type: String,
    require: true
  },
  eventDate: {
    type: date

  }
}, { timestamp: true })
export default mongoose.model('meetup', meetSchema);