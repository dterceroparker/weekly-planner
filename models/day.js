import mongoose from 'mongoose'

const Schema = mongoose.Schema

const daySchema = new Schema({
  day: {type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']},
  task: String,
  priority: {type: String, enum: ['Low-priority', 'Medium-priority', 'High-priority']},
  completion: Boolean,
}, {
  timestamps: true
})

const Day = mongoose.model('Day', daySchema)

export {
  Day
}