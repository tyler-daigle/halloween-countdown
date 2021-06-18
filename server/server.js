const express = require("express");
const cors = require("cors");
const app = express();
const port =  process.env.PORT || 8080;

const numberDaysTillHalloween = require("./halloween");

const numDays = numberDaysTillHalloween();

const svg = `
<svg version="1.1"
  baseProfile="full"
  width="200" height="50"
  xmlns="http://www.w3.org/2000/svg"
  class="halloween-svg">

  <style>
    .main-text {
      font-size: 18px;
      fill: black;
      font-family: Arial;

    }

    .days-text {
      font-size: 30px;
      fill: orange;
      font-weight: bold;
      font-family: Arial;
    }

  </style>
  <rect x="0" y="0" width="400" height="200" fill="orange"/>
  <rect x="130" y="5" width="65" height="40" fill="black" />

  <text x="2" y="35" font-size="30px" fill="black">🎃</text>
  <text class="main-text" x="40" y="20">Days Until</text>
  <text class="main-text" x="40" y="40">Halloween</text>

  <text class="days-text" x="140" y="35">${numDays}</text>
</svg>
`;

app.use(cors());

app.get("/", (req, res) => {  
  res.set("Content-Type", "image/svg+xml");
  res.set("Vary", "Accept-Encoding");
  res.send(svg);
});

app.listen(port, () => console.log(`Listening on port ${port}`));