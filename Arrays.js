"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("ArrayS");
//Declare & Initialize the Array
var StringArray = ["One", "Two", "Three", "Four"];
var IntegerArray = [1, 2, 3, 4];
var BooleanArray = [true, false, false, true];
var MixedArray = ["String", 1, true, 2.1, 1];
console.log("String Array  :", StringArray);
console.log("Numbers Array :", IntegerArray);
console.log("Boolean Array :", BooleanArray);
console.log("Mixed Array   :", MixedArray);
//Traversal or Display the Results
console.log("Number Array:", IntegerArray);
console.log("Number Array:" + IntegerArray);
//Find Length
console.log("String Array Length:" + StringArray.length);
console.log("Mixed Array Length :" + MixedArray.length);
//Insertion
console.log("Before Push(Five) :", StringArray);
StringArray.push("Five");
console.log("After Push(Five) :", StringArray);
StringArray.pop();
console.log("After Pop() :", StringArray);
IntegerArray.unshift(100);
console.log("After Unshift(100) :", IntegerArray);
IntegerArray.shift();
console.log("After Shift():", IntegerArray);
//# sourceMappingURL=Arrays.js.map