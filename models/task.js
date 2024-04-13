import mongoose from 'mongoose'

const Schema = mongoose.Schema

const taskSchema = new Schema({
  day: String,
  item: String,
  priority: {urgency: String, enum: ['Low-priority', 'Medium-priority', 'High-priority']},
  completion: Boolean,
})

const Task = mongoose.model('Task', taskSchema)

export {
  Task
}