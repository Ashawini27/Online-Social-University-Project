import mongoose from 'mongoose'

const CourseSchema = new mongoose.Schema({
  name: String,
  pages: { type: Number, default: 0 },
  content: [{ type: String }]
},{
    timestamps: true
})

module.exports = mongoose.models.Course || mongoose.model('Course', CourseSchema)