const moment = require("moment");

function numberDaysTillHalloween() {
  const today = moment();
  const currentMonth = today.month() + 1;
  let year = today.year();
  
  if(currentMonth > 10) {
    year++; //halloween has already passed, we are in november or december
  }
  
  const halloween = moment(`${year}-10-31`);
  
  return halloween.diff(today, "days");
}

module.exports = numberDaysTillHalloween;