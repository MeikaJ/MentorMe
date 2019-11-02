// import mongoose, { schema } from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, 'Name must be atleast 5 characters']
  },
  description: {
    type: String,
    required: true,
    minLength: [10, 'Name must be atleast 10 characters']
  },
  category: {
    type: String,

  },
  meetings: [{
    type: Schema.Types.ObjectID,
    ref: 'Meetup'
  }]

}, { timestamp: true });
export default mongoose.model('Group', GroupSchema)
