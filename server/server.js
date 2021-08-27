const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const numberDaysTillHalloween = require("./halloween");

app.use(cors());

app.get("/:param?", (req, res) => {
  const numDays = numberDaysTillHalloween();

  /********************************************************************
   *
   *  The handmade SVG
   *
   ********************************************************************/
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

  /**********END OF SVG ***********************************************/

  res.set("Content-Type", "image/svg+xml");
  res.set("Cache-Control", "no-store");
  res.set("Vary", "Accept-Encoding");
  res.send(svg);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
