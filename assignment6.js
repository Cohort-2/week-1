// write a program that prints all the male people first name from an complex object

const allUsers = [
  {
    firstName: "Hazel",
    lastName: "sharma",
    gender: "female",
  },
  {
    firstName: "Naina",
    lastName: "sharma",
    gender: "female",
  },
  {
    firstName: "Subh",
    lastName: "sharma",
    gender: "male",
  },
];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i].gender === "female") {
    console.log(allUsers[i].firstName);
  }
}
