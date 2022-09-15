const express = require("express");
const app = express();
const mongoose = require("mongoose");
const StatsModel = require("./models/Stats");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://yliu3183:GATECHyuxiao3183@stats.dqq9fq0.mongodb.net/stats?retryWrites=true&w=majority"
);

app.get("/getStats", (req, res) => {
  StatsModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createStats", async (req, res) => {
  const stat = req.body;
  const newStat = new StatsModel(stat);
  await newStat.save();

  res.json(stat);
});

app.listen(3001, () => {
  console.log("server runs");
});
