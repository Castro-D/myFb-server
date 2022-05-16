const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/posts', (req, res) => {
  res.json({ message: 'Got all posts!' });
});

app.post('/posts', (req, res) => {
  res.json({ message: 'post created' });
});

app.put('/posts/id', (req, res) => {
  res.json({ message: 'updated a post' });
});

app.delete('/posts/id', (req, res) => {
  res.json({ message: 'deleted a post' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
