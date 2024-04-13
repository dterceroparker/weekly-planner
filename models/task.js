import mongoose from 'mongoose'

const Schema = mongoose.Schema

const taskSchema = new Schema({
  day: {type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']},
  task: String,
  type: {type: String, enum: ['Low-priority', 'Medium-priority', 'High-priority']},
  completion: Boolean,
}, {
  timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

export {
  Task
}