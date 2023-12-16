// write a program on marks grading
// score<50, F
// score>=50, <=60 D
// score>60, <=70 C
// score>70, <=80 B
// score>80, <=90 A
// score>90, <100 A+
var score= 75
if (score<50) {
    console.log("F");
}
if (score>50 && score<60) {
    console.log("D");
}
if (score>60 && score<70) {
    console.log("C");
}
if (score>70 && score<80) {
    console.log("B");
}
if (score>80 && score<90) {
    console.log("A");
}
if (score>90 && score<100) {
    console.log("A+");
}
// if-else-if method

if (score<50) {
    console.log("F");
}
else if (score>50 && score<60) {
    console.log("D");
}
else if (score>60 && score<70) {
    console.log("C");
}
else if (score>70 && score<80) {
    console.log("B");
}
else if (score>80 && score<90) {
    console.log("A");
}
else {
    console.log("A+");
}
// onther method is switch statment
// write program to show  
var day="sun"
switch (day) {
    case "mon":
        console.log("today is monday");
        break;
    case "tue":
        console.log("today is tuesday");
        break;
    case "wed":
        console.log("today is wednesday");
        break;
    case "thr":
        console.log("today is thrusday");
        break;
    case "fri":
        console.log("today is friday");
        break;
    case "sat":
        console.log("today is saturday");
        break;    
    case "sun":
        console.log("today is sunday");
        break;
        

    default:
        break;
}

