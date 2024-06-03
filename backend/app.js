import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const users = [];

app.post('/signup', (req, res) => {
    const { email, password, confirmPassword } = req.body;

    if (!password || password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    if (users.some(user => user.email === email)) {
        return res.status(400).json({ message: 'Email is already registered' });
    }

    const newUser = {
        email,
        password
    }

    users.push(newUser);
    console.log(users);
    res.status(200).json({ message: 'Signup successful', email });
});

app.post('/login',(req,res) => {
    const {email,password} = req.body;
    console.log(email);

    const user = users.find(user => user.email === email);

    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    res.status(200).json({ message: 'Login successful', email });

})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
