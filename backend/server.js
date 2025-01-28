import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import authRoutes from './auth/auth.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud',
});

app.get('/getAll', (req, res) => {
  const sql = 'SELECT * FROM personal_information ORDER BY updatedDate DESC';
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: 'Error inside server', Error: err });
    return res.json({ Message: 'Successfully Fetched Data', response: result });
  });
});

app.get('/get/:id', (req, res) => {
  const { id } = req.params;
  const sql =
    'SELECT * FROM personal_information WHERE id = ? ORDER BY updatedDate DESC';

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.json({ Message: 'Error inside server', Error: err });
    }
    if (result.length === 0) {
      return res.json({ Message: 'No data found for the given ID' });
    }
    return res.json({ Message: 'Successfully Fetched Data', response: result });
  });
});

app.post('/add', (req, res) => {
  const {
    name,
    dob,
    phoneNumber,
    email,
    address,
    qualification,
    occupation,
    website,
  } = req.body;

  const sql =
    'INSERT INTO personal_information (name, dob, phoneNumber, email, address, qualification, occupation, website, updatedDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)';
  db.query(
    sql,
    [
      name,
      dob,
      phoneNumber,
      email,
      address,
      qualification,
      occupation,
      website,
    ],
    (err, result) => {
      if (err) {
        return res.json({ Message: 'Error inside server', Error: err });
      }
      return res.json({ Message: 'Data Successfully Added', response: result });
    },
  );
});

app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const {
    name,
    dob,
    phoneNumber,
    email,
    address,
    qualification,
    occupation,
    website,
  } = req.body;

  const sql =
    'UPDATE personal_information SET name = ?, dob = ?, phoneNumber = ?, email = ?, address = ?, qualification = ?, occupation = ?, website = ?, updatedDate = CURRENT_TIMESTAMP WHERE id = ?';
  db.query(
    sql,
    [
      name,
      dob,
      phoneNumber,
      email,
      address,
      qualification,
      occupation,
      website,
      id,
    ],
    (err, result) => {
      if (err) {
        return res.json({ Message: 'Error inside server', Error: err });
      }
      if (result.affectedRows === 0) {
        return res.json({
          Message: 'No data found with the provided ID to update',
        });
      }
      return res.json({
        Message: 'Data Successfully Updated',
        response: result,
      });
    },
  );
});

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM personal_information WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.json({ Message: 'Error inside server', Error: err });
    }
    if (result.affectedRows === 0) {
      return res.json({
        Message: 'No data found with the provided ID to delete',
      });
    }
    return res.json({ Message: 'Data Successfully Deleted', response: result });
  });
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
