const mongoose = require('mongoose');

const Mountain = mongoose.model('mountains');

module.exports = app => {
  app.get('/', async (req, res) => {
    const mountains = await Mountain.find(); // need to create mongo query here

    res.send(mountains);
  });
};