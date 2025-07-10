//1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს

function Biggernumber(m, n) {
  if (m > n) {
    return m;
  } else if (n > m) {
    return n;
  } else {
    return 0;
  }
}

console.log(Biggernumber(5, 7)); 
console.log(Biggernumber(4, 4));


//2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 9));


//3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)

function printName() {
  console.log("tamar chaladze");
}

printName(); 

//4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)

function FullName(firstname, lastname) {
  return firstname + " " + lastname;
}

let fullName = FullName("tamar", "chaladze");
console.log(fullName); 

//5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)

function multiplyupto(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
return result; 
}
console.log(multiplyupto(3));
console.log(multiplyupto(5)); 

//Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი properties: firstName, lastName, age, scores (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და მეთოდი fullName რომელიც აბრუნებს სტუდენტის სრულ სახელს ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) 
let student = {
  firstName: "tako",
  lastName: "chaladze",
  age: 37,
  scores: [4, 7, 5, 3, 2],
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};


//6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)
console.log(student.fullName());

//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს
function score(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum;
}

console.log(score(student.scores)); 

//8. დაბეჭდეთ სტუდენტის სახელი და ასაკი
console.log( student.firstName);
console.log( student.age);



