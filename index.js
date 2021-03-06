const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/Mountain');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();
app.use(bodyParser.json());

require('./routes/mountainRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // order of code in this if statement is important!!
  app.use(express.static('client/build'));

  // catch all for unresolved requests, just returns index.html
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);