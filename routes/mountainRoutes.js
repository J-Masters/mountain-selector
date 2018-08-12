const mongoose = require('mongoose');

const Mountain = mongoose.model('mountains');

module.exports = app => {
  app.get('/mountains', async (req, res) => {
    const mountains = await Mountain.find({});

    res.send(mountains);
  });
};