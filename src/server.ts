import express from 'express';
import dotenv from 'dotenv';
import { userRouter } from './routes/users.route';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to Expressjs + drizzle ORM with MVC architecture!');
});

// default middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importing routes
app.use('/api', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
