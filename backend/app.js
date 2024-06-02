import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/signup', (req, res) => {
    const { email, password, confirmPassword } = req.body;

    if (!password || password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Hashing passwords and saving to the database should be done here.
    // For example, using bcrypt:
    // const hashedPassword = await bcrypt.hash(password, 10);

    res.status(200).json({ message: 'Signup successful', email });
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
