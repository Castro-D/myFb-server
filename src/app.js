const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Facebook',
  password: 'admin',
  port: 5432,
});

app.get('/posts', (req, result) => {
  pool.query('SELECT * FROM posts', (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      result.json(res.rows);
    }
  });
});

app.post('/posts', (req, result) => {
  pool.query('INSERT INTO posts (comment, img_path) values ($1, $2)', ['posted from node', 'testing/path'], (err) => {
    if (err) {
      console.log(err.stack);
    } else {
      result.json({ message: 'post succesful' });
    }
  });
});

app.put('/posts/:id', (req, result) => {
  const { id } = req.params;
  pool.query('UPDATE posts SET comment=$1, img_path=$2 WHERE id=$3', ['asdasdas another example', 'test', id], (err) => {
    if (err) {
      console.log(err.stack);
    } else {
      result.json({ message: 'post updated succesfully' });
    }
  });
});

app.delete('/posts/:id', (req, result) => {
  const { id } = req.params;
  pool.query('DELETE FROM posts WHERE id = $1', [id], (err) => {
    if (err) {
      console.log(err.stack);
    } else {
      result.json({ message: 'post deleted succesfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
