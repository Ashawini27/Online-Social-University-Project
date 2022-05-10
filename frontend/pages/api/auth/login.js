import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/User'
import bcrypt from 'bcrypt'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()
  console.log('dbConnected')

  switch (method) {
    case 'POST':
      try {
        const { email, password } = JSON.parse(req.body);
        console.log(email, password)
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({success: false, message: 'User with same email not found'});
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({success: false, message: 'Password doesn\'t match'});
        res.status(200).json({success: true, data: user});
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}