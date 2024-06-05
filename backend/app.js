import express from 'express';
import cors from 'cors';
import sequelize from './util/database.js';
import userRoutes from './routes/userRoutes.js';
import mailRoutes from './routes/mailRoutes.js';
import dotenv from 'dotenv';

import User from './models/user.js';
import Email from './models/addEmail.js';

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

app.use('/auth', userRoutes);
app.use('/mail', mailRoutes);


sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log('Error: ' + err));
