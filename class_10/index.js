// date handling.
var getDate= new Date()
var getYear= getDate.getFullYear()
var getTime= getDate.getTime()
var getMin= getDate.getMinutes()
var getHour= getDate.getHours()
var getSec= getDate.getSeconds()
var getMonth= getDate.getMonth()
var getDay= getDate.getDay()

console.log("current date",getDate);
console.log("current year",getYear);
console.log("current time",getTime);
console.log("current minutes",getMin);
console.log("current hours",getHour);
console.log("current sec",getSec);
console.log("current month",getMonth);
console.log("current day",getDay);

// write a program to get a current day.
var day=['sun','mon','tue','wed','thu','fri','sat']
console.log("current day is:",day[getDay]);

// write a program to get month of year.
var year=['jan','feb','mar','apr','may','jun','july','aug','sep','oct','nov','dec']
console.log("current month:",year[getMonth]);
