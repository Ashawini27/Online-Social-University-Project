// models/User.js

import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  courses_studying: [{
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
      },
      completed: { type: Number, default: 0 }
  }]
},{
    timestamps: true
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)