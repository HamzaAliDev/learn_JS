// comparison operators

var num1 = 5
var num2 = 6
var result1 = num1>num2
console.log("num1>num2=>",result1)  

var result2 = num1<num2
console.log("num1<num2=>",result2) 

var result3 = num1>=num2
console.log("num1>=num2=>",result3) 

var result4 = num1<=num2
console.log("num1<=num2=>",result4) 

var result5 = num1==num2
console.log("num1==num2=>",result5) 

var result6 = num1!=num2
console.log("num1!=num2=>",result6) 

// && and operator
// || or operator

var num3 = 9
var num4 = 10
var result7 = num1>num2 && num3>num4
console.log("num1>num2 && num3>num4",result7)

var result8 = num1<num2 && num3<num4
console.log("num1<num2 && num3<num4",result8)

var result9 = num1>num2 && num3<num4
console.log("num1>num2 && num3<num4",result9)

var result10 = num1>num2 || num3<num4
console.log("num1>num2 || num3<num4",result10)

// complex operation

var result11 = num1>num2 && num3>num4 && num1>num2 || num3<num4 || num1>num2 && num3<num4
console.log("final result",result11)



