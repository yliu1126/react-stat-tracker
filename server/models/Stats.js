const mongoose = require("mongoose");
const StatsSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  stats: [
    {
      id: Number,
      name: String,
      number: String,
      initial: String,
      or: Number,
      dr: Number,
      reb: Number,
      ast: Number,
      to: Number,
      fifty: Number,
      defl: Number,
      stl: Number,
      blk: Number,
      pf: Number,
      df: Number,
      madeTwo: Number,
      attemptedTwo: Number,
      madeThree: Number,
      attemptedThree: Number,
      madeFG: Number,
      attemptedFG: Number,
      madeFT: Number,
      attemptedFT: Number,
      pts: Number,
    },
  ],
});

const StatsModel = mongoose.model("stats", StatsSchema);
module.exports = StatsModel;
