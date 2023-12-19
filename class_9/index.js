// functions use in array.

// "push" it add data in array at last.
var names=["ali","saim","saad","sami","ayan"]
console.log("actual array",names);
names.push("talha");
console.log("after push",names);

// "pop" it remove data in array at last.
names.pop()
console.log("after pop",names);

// "unshift" it add data in array at starting.
names.unshift("talha")
console.log("after unshift",names);

// "shift" it remove data in array at starting.
names.shift()
console.log("after shift",names);

// "splice" it remove/add data in array anywhere you want.
names.splice(2,0,"talha")
console.log("after splice",names);

// "slice" it break the array anywhere you want.
var newName=names.slice(1,3)
console.log("after slice",newName);