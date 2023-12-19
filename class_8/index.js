// array
var num=1
var num1=2
var num2=3
var num3=4
var num4=5
var num5=6
// it is not a good method
var nums=[1,2,3,4,5,6,7,8]
console.log(nums);

//  index    0     1      2      3      4      5
var names=["ali","sana","iqra","saad","sami","hira"]
console.log(names);

// find the lenght of array
console.log("length of array",names.length);
console.log(names[3]);
console.log(nums[6]);

// write a ts program to print index and their value.
for (let index = 0; index < names.length; index++) {
    console.log("index",index);
    console.log("value of index",names[index]);
    
}