import express, { json } from 'express';
const app = express();
const PORT = 3000;

app.use(json());

let users = [];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({ message: 'User added successfully', user: newUser });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
