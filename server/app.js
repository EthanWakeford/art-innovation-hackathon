const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('/test', (req, res) => {
  res.send('hello ');
});

app.listen(8080, () =>
  console.log('hello we are running a server on localhost:8080')
);
