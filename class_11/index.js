// string handling.
var line="I love Pakistan,Pakistan Zindabad."
console.log(line);

// string length
var getStringLength=line.length
console.log("length of string:",getStringLength);

// use of slice, another method which is used instead 
// slice is "substring" method. its structure is same like
// slice 
var getStringSlice=line.slice(7,15)
console.log("use of slice function:",getStringSlice);

// how to replace words in a strings.
var replaceWord= line.replace("Pakistan","Islamic Republic of Pakistan");
console.log("replacement of word:",replaceWord);

// convert string letter into uppercase.
var uppercaseString=line.toLocaleUpperCase();
console.log("uppercase letter:",uppercaseString);

// convert string letter into lowercase.
var lowercaseString=line.toLocaleLowerCase();
console.log("lowercase letter:",lowercaseString);

// join two strings by two method using + or concat.
var string1= "i love"
var string2= " Pakistan"
// var string3= string1 + " " +string2
var mergedString=string1.concat(string2)
console.log("add two strings:",mergedString);

// "trim" function is used to remove extra spaces from start 
// and end of string.
var userName= "Ali Hamza  "
var trimuserName= userName.trim();
console.log("trim function use:",trimuserName);

// "charAt" function is used to check the character of 
// any index no.
var charAtUserName= userName.charAt(4)
console.log("charAtUserName:",charAtUserName); 
// "indexOf" function is used to check index of any 
// character.
var indexUserName= userName.indexOf('H')
console.log("indexUserName:",indexUserName);

// "split" function.
var anyString="i, love, pakistan."
console.log("i, love, pakistan.",anyString.split(","));

// write a js program to convert number string into number array.
var numString= "1,2,3,4,5,6,7,8,9,10"
var numArray=numString.split(",");
for (let index = 0; index < numArray.length; index++) {
    const element = numArray[index];
    console.log("element:",parseInt(element));
}
console.log("number array",numArray);