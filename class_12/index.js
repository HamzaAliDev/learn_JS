// function explanation.
console.log("log1");
console.log("log2");
function num(params) {
    var num1=5
    var num2=10
    var sum=num1 + num2
    console.log(sum);
}
num()

function numSum(num10,num20) {
    // var num1=5
    // var num2=10
    var sum=num10 + num20
    console.log(sum);
}
numSum(2,5)
numSum(4,8)
numSum(2,8)



// default params setting for proper functioning.
function name1(a=0,b=0,c=0,d=0) {
    console.log("a = ",a);
    console.log("b = ",b);
    console.log("c = ",c);
    console.log("d = ",d);
    var sum10=a+b+c+d
    return sum10
    }
var result =name1(3,4,5)
console.log(result);

