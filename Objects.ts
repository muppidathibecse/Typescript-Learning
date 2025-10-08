console.log("Welcome to Objects");
//Type:1
const User = {
  name: "",
  password: "",
  age: 0,
};
User.name = "Aadhi";
User.password = "***";
User.age = 3;
console.log(User);

//Type:2
const Admin: { id: string; pin: number | null; isAdmin: boolean } = {
  id: "Aadhi",
  pin: null,
  isAdmin: true,
};
Admin.id = "Ak";
console.log(Admin);
Admin.pin = 1;
console.log(Admin);
