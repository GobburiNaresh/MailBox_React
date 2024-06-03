import User from '../models/user.js';

export const signup = async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    if (!password || password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already registered' });
        }

        const newUser = await User.create({ email, password });
        res.status(200).json({ message: 'Signup successful', email: newUser.email });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({ message: 'Login successful', email: user.email });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
