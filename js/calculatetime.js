function calculate() {
  var fromDate = document.getElementById('fromDate').value;
  var toDate = document.getElementById('toDate').value;

  try {
    document.getElementById('result').innerHTML = '';

    var result = getDateDifference(new Date(fromDate), new Date(toDate));

    if (result && !isNaN(result.years)) {
      document.getElementById('result').innerHTML =
        result.years + ' year' + (result.years == 1 ? ' ' : 's ') +
        result.months + ' month' + (result.months == 1 ? ' ' : 's ') + 'and ' +
        result.days + ' day' + (result.days == 1 ? '' : 's');
    }
  } catch (e) {
    console.error(e);
  }
}

function getDateDifference(startDate, endDate) {

  if (startDate > endDate) {
    console.error('Start date must be before end date');
    return null;
  }

  var startYear = startDate.getFullYear();
  var startMonth = startDate.getMonth();
  var startDay = startDate.getDate();

  var endYear = endDate.getFullYear();
  var endMonth = endDate.getMonth();
  var endDay = endDate.getDate();

  // february might be a leap year
  var february = (endYear % 4 == 0 && endYear % 100 != 0) || endYear % 400 == 0 ? 29 : 28;
  // number of days in each month
  var daysOfMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  var startDateNotPassedInEndYear = (endMonth < startMonth) || endMonth == startMonth && endDay < startDay;
  // years
  var years = endYear - startYear - (startDateNotPassedInEndYear ? 1 : 0);
  // months
  var months = (12 + endMonth - startMonth - (endDay < startDay ? 1 : 0)) % 12;
  // days
  var days = startDay <= endDay ? endDay - startDay : daysOfMonth[(12 + endMonth - 1) % 12] - startDay + endDay;

  return {
    years: years,
    months: months,
    days: days
  };
}
