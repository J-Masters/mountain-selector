const mongoose = require('mongoose');
const { Schema } = mongoose;

const mountainSchema = new Schema({
  name: String,
});

mongoose.model('mountains', mountainSchema);