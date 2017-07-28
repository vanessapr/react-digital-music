const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api', require('./routes'));

app.listen(8081, () => {
  console.log('running on port 8081')
});
