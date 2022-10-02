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

app.get(
  "/getStats/date/:year(\\d{4})-:month(\\d{2})-:day(\\d{2})",
  (req, res) => {
    let queryDate = new Date(
      +req.params.year,
      +req.params.month - 1,
      +req.params.day
    );
    queryDate.setHours(-4);
    console.log(queryDate);
    StatsModel.find(
      {
        date: { $eq: new Date(queryDate) },
      },
      (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }
      }
    );
  }
);

app.post("/createStats", async (req, res) => {
  const stat = req.body;
  const newStat = new StatsModel(stat);
  await newStat.save();

  res.json(stat);
});

app.listen(3001, () => {
  console.log("server runs");
});
