import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/User'
import bcrypt from 'bcrypt'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'POST':
      try {
        const { name, email, password } = JSON.parse(req.body);
        const user = await User.findOne({email});
        if(user) return res.status(400).json({success: false, message: 'User with same email already exists'});
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({name, email, password: hashedPassword});
        res.status(201).json({success: true, data: newUser});
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}