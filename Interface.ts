interface admin {
  adminid: string;
  adminpin: number;
  isAdmin: boolean;
}
var Admins: admin[] = [];
Admins.push({ adminid: "A@123", adminpin: 123, isAdmin: true });
Admins.push({ adminid: "B@123", adminpin: 124, isAdmin: false });
Admins.push({ adminid: "C@123", adminpin: 125, isAdmin: true });
Admins.push({ adminid: "D@123", adminpin: 126, isAdmin: false });
console.log(Admins);
var admins = Admins.filter((a) => a.isAdmin == true);
console.log(admins);
admins = Admins.filter((a) => a.adminpin == 126);
console.log(admins);

interface Company {
  name: string;
  address: string;
}
interface Employee extends Company {
  username: string;
  age: number;
}
const user: Employee[] = [
  {
    name: "SST",
    address: "Gayatri Tech Park",
    username: "Aadhi",
    age: 3,
  },
];
user.push({
  name: "SST1",
  address: "Gayatri Tech Park",
  username: "Aadhi1",
  age: 13,
});
user.push({
  name: "SST2",
  address: "Gayatri Tech Park",
  username: "Aadhi2",
  age: 23,
});
console.log("Before POP() user:", user);
user.pop();
console.log("After POP() user:", user);
const f = user.filter((u) => u.username === "Aadhi1" || u.age === 3);
console.log(f);
