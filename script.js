// მიზანი გამარჯობის თქმა
// function sayHello() {
//   alert("hello world");
// }

// sayHello();

// function sayHelloToUser() {
//   let userName = prompt("შეიყვანე სახელი");
//   console.log(`Hello ${userName}`);
// }
// function squareNumberone() {
//   let numb1 = 10;
//   let squareNumber = numb1 * numb1;
//   return numb1 * numb1;
// }
// function squareNumberTwo() {
//   let numb1 = 20;
//   return numb1 * numb1;
// }

// squareNumberone();
// squareNumberTwo();

// console.log(squareNumberone() * 10);
// console.log(squareNumberTwo() * 20);

// function sayHelloToUser() {
//   let userName = prompt("შეიყვანე სახელი");
//   console.log(`Hello ${userName}`);
// }

// sayHelloToUser();
// let myList = [5, 10, "hello"];

let myObj = {
  id: 10,
};

let myObj2 = {
  id: 10,
};

let numb1 = 10;
let numb2 = 10;

console.log(numb1 === numb2);
console.log(myObj.id === myObj2.id);
შედარება;

// calculator

// function plusNumber(numb1, numb2) {
//   return numb1 + numb2;
// }

// console.log(plusNumber(10, 20));
// console.log(plusNumber(40, 20));
// console.log(plusNumber(50, 20));

// მიზანი- დაგვიბრუნოს 5 პიროვნების საშუალო ქულა,
// function averageNumber(numb1, numb2, numb3, numb4, numb5) {
//   //   console.log(numb1);
//   let sumNumber = numb1 + numb2 + numb3 + numb4 + numb5;
//   let average = sumNumber / 5;
//   return average;
// }

// let groupOne = averageNumber(average(4, 5, 1, 0, 10));
// let groupTWO = averageNumber(2, 6, 7, 0, 10);

// if (groupOne > groupTWO) {
//   console.log("პირველი ჯგუფი წავიდეს");
// } else if (groupOne < groupTWO) {
//   console.log("მეორე ჯგუფი წავიდეს");
// } else {
//   console.log("ახალი გამოცდა");
// }

// string ის გადაყვანა number

let numb = "18";
console.log(Number(numb));

console.log(typeof numb);
let myAge = prompt("ასაკი");
if (isNaN(myAge)) {
  console.log("not valid number");
} else {
  console.log(`your age is :${myAge}`);
}

console.log(typeof myAge);
