// Reference: https://www.w3schools.com/jsref/jsref_getday.asp
var now = new Date();
// array returns the name of a weekday (not just a number)
// didnt use array but left it in, incase I decide to
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// function to check the day and time to see if clinic is open or closed
var checkTime = function() {
  // var today = weekday[now.getDay()]; // use with weekday array
  var clinicHours = document.getElementById("clinicHours");
  var dayOfWeek = now.getDay(); // days go from 0-6/Sunday to Saturday
  var hour = now.getHours(); // hours = 24hr clock

  if (dayOfWeek == 0 || dayOfWeek == 6) {
  clinicHours.innerHTML =  "Closed";
  clinicHours.className = "closed"; //https://www.w3schools.com/jsref/prop_html_classname.asp
  }

  else if ((dayOfWeek == 1 || dayOfWeek == 2 || dayOfWeek == 4) && hour >= 8 && hour <= 17) {
    clinicHours.innerHTML = "Open";
    clinicHours.className = "open";
  }

  else if ((dayOfWeek == 3) && hour >= 9 && hour <= 18) {
    clinicHours.innerHTML = "Open";
    clinicHours.className = "open";
  }

  else {
    if ((dayOfWeek == 5) && hour >= 7 && hour <= 15) {
      clinicHours.innerHTML = "Open";
      clinicHours.className = "open";
    }
  }
};
// calls checkTime() at specified interval - https://www.w3schools.com/jsref/met_win_setinterval.asp
setInterval(checkTime, 1000);
checkTime();
