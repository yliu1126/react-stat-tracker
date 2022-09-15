const mongoose = require("mongoose");
const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  jersey: {
    type: Number,
  },
  points: {
    type: Number,
  },
});
const StatsSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  stat: [PlayerSchema],
});

const StatsModel = mongoose.model("stats", StatsSchema);
module.exports = StatsModel;
