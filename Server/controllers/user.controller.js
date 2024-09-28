import { User } from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }
  
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });

     
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
            expiresIn: '4h', 
        });

        res.status(201).json({
            message: 'User registered successfully',
            user: {username: user.username, email: user.email },
            token,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
