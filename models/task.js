import mongoose from 'mongoose'

const Schema = mongoose.Schema

const taskSchema = new Schema({
  date: Date,
  detail: String,
  type: {type: String, enum: ['Low-priority', 'Medium-priority', 'High-priority']},
  completion: Boolean,
}, {
  timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

export {
  Task
}