const mongoose = require('mongoose');
const { Schema } = mongoose;

const mountainSchema = new Schema({
  name: String,
  annualSnowfall: Number,
  acreage: Number,
  vertical: Number,
  summitElevation: Number,
  lifts: Number,
  ticketPrice: Number,
  terrainParks: Number,
  airportNearest: String,
  driveTime: Number,
  snowboardsAllowed: String,
  country: String,
  stateOrProvince: String,
  beginnerPercent: Number,
  intermediatePercent: Number,
  expertPercent: Number,

  nightLifeScore: Number,
  snowScore: Number,
  beginnerScore: Number,
  intermediateScore: Number,
  expertScore: Number,
  travelEaseScore: Number,
  familyFriendlyScore: Number,
  priceScore: Number,
  parksScore: Number,
  crowdsScore: Number
});

mongoose.model('mountains', mountainSchema);