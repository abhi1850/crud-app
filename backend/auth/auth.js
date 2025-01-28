import express from 'express';
import mysql from 'mysql';

const router = express.Router();

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud',
});

// Login API
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ Message: 'Username and Password are required' });
  }

  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], (err, result) => {
    if (err) {
      console.error('Error while querying the database:', err);
      return res
        .status(500)
        .json({ Message: 'Error inside server', Error: err });
    }

    if (result.length === 0) {
      console.error(`No user found with username: ${username}`);
      return res.status(401).json({ Message: 'Invalid Username or Password' });
    }

    const user = result[0];

    // Compare the plain-text password with the stored password
    if (password !== user.password) {
      console.error('Password mismatch for user:', username);
      return res.status(401).json({ Message: 'Invalid Username or Password' });
    }

    console.log('Passwords match for user:', username);
    return res.status(200).json({
      Message: 'Login Successful',
      user: { id: user.id, username: user.username },
    });
  });
});

export default router;
