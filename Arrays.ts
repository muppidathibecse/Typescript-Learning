console.log("ArrayS");
//Declare & Initialize the Array
var StringArray: string[] = ["One", "Two", "Three", "Four"];
var IntegerArray: number[] = [1, 2, 3, 4];
var BooleanArray: boolean[] = [true, false, false, true];
var MixedArray: (string | boolean | number)[] = ["String", 1, true, 2.1, 1];
console.log("String Array  :", StringArray);
console.log("Numbers Array :", IntegerArray);
console.log("Boolean Array :", BooleanArray);
console.log("Mixed Array   :", MixedArray);

//Traversal or Display the Results
console.log("Number Array:", IntegerArray);
console.log("Number Array:" + IntegerArray);

//for Each Loop
IntegerArray.forEach((key) => {
  console.log(key);
});

//for Loop
for (let key of StringArray) {
  console.log(key);
}

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
console.log("After U  nshift(100) :", IntegerArray);
IntegerArray.shift();
console.log("After Shift():", IntegerArray);

//function If Suppose C parameter is missing, That time Take as 0
var result = Add(9, 1);
console.log("From Function:", result);

function Add1(a: string, b: string, c?: string) {
  return a + b + c;
}
var result1 = Add1("A", "B");
console.log("From Function:", result1);
function Add(a: number, b: number, c: number = 0) {
  return a + b + c;
}



                    