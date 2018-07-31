const mongoose = require('mongoose');
const { Schema } = mongoose;

const mountainSchema = new Schema({
  name: String,
  annualSnowfall: Number,
  acreage: Number,
  vertical: Number,
  summitElevation: Number,
  lifts: Number,
  terrainParks: Number,
  airportNearest: String,
  driveTime: Number,
  snowboardsAllowed: Boolean,
  country: String,
  stateOrProvince: String,
  beginnerPercent: Number,
  intermediatePercent: Number,
  expertPercent: Number
});

mongoose.model('mountains', mountainSchema);