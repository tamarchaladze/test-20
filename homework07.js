// 1. დაბეჭდეთ რიცხვები 2-დან 8-მდე
for (let i = 2; i <= 8; i++) {
  console.log(i);
}
// 2. დაბეჭდეთ ყოველი მეოთხე რიცხვი 5-დან 35-ის ჩათვლით
for (let i = 5; i <= 35; i += 4) {
  console.log(i);
}
// 3. 3-დან 8-მდე რიცხვების ნამრავლი
let number = 1;
for (let i = 3; i <= 8; i++) {
  number *= i;
}
console.log("number:", number); 

// 4. ობიექტი person და სრული სახელი
let person = {
  firstName: "Tamar",
  lastName: "Chaladze",
  age: 37
};
console.log("Full name:", person.firstName + " " + person.lastName);

// 5. დაბეჭდეთ person-ის თითოეული property value
for (let key in person) {
  console.log(key + ":", person[key]);
}

// 6. fruits მასივი და თითოეული ელემენტი
let fruits = ["Apple", "Banana", "Orange"];
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// 7. დაამატეთ fruits მასივის თავში Grapes და ბოლოში Pineapples
fruits.unshift("Grapes");
fruits.push("Pineapples");
console.log("updated fruits:", fruits);

// 8. 1-დან 34-მდე რიცხვების ჯამი
let sum = 0;
for (let i = 1; i <= 34; i++) {
  sum += i;
}
console.log("Sum from 1 to 34:", sum);


