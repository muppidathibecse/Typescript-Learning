// console.log("Types");
// type user = {
//   name: string;
//   pin: number;
// };
// var Users: user[] = [];
// Users.push({
//   name: "Aadhi",
//   pin: 123,
// });
// console.log(Users);
console.log("Types");
type Company1 = {
  companyname: string;
  address: string;
};
type User1 = {
  name: string;
  pin: number;
};

type users = User1 | Company1;
var users2: users[] = [];
users2.push({
  pin: 123,
  companyname: "sst",
  address: "skds",
});

console.log(users2);
