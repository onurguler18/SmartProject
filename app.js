const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('İndex sayfası');
});

const port = 3000;

app.listen(port, () => {
  console.log(`App Started on port ${port}`);
});
