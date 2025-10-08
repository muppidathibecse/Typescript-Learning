console.log("Welcom to Map");
var USERMAP = new Map();
//set in the Map
USERMAP.set(1, "Adadhi");
USERMAP.set(2, "Raj");
USERMAP.set(3, "Ram");
//Display
USERMAP.forEach(function (key) { return console.log(key); });
console.log("User Map:", USERMAP);
//size
console.log("Size:", USERMAP.size);
//delete
if (USERMAP.has(2)) {
    USERMAP.delete(2);
    console.log("After delete the key : 2 ", USERMAP);
}
else {
    console.log("Not Found");
}
//clear All Entries
USERMAP.clear();
console.log(USERMAP);
 