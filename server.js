const express = require('express');
const path = require('path');

const SPApath = '/express/';
const port = 8090;

const app = express();
app.use(express.json());
app.use(express.static('express'));

app.use('/', (req, res) => {
  // eslint-disable-next-line no-path-concat
  res.sendFile(path.join(__dirname + SPApath));
});

app.listen(port, (err) => {
  if (err) console.log('Error in server setup');
  console.log(`Listening on port ${port}`);
});
