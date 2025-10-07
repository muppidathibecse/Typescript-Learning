var yourname: string = "";
var yourage: number = 0;
var yourheight: number = 0.0;
var yourexam: boolean = false;
yourname = "Aadhi";
yourage = 21;
yourheight = 112.8;
yourexam = true;
console.log("Data Types:");
console.log("===========");
console.log("String :  Name   : ", yourname);
console.log("Number :  Age    : ", yourage);
console.log("Float  :  Height :", yourheight);
console.log("Boolean:  Reult  :", yourexam);

var User = {
  name: "",
  password: "",
  pin: 0,
};
(User.name = "Aa"), (User.password = "***"), (User.pin = 1234);
console.log("Objct:");
console.log("==");
console.log(User.name);
console.log(User.password);
console.log(User.pin);
