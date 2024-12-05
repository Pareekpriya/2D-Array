// Q1
const fruits = ["apple","banana","orange"];
fruits.push("grape");
fruits.shift();

console.log(fruits);

// Q2
let str = ' JavaScript is fun ';
str = str.trim();
str = str.toUpperCase();
str = str.split(" ");
console.log(str);



// // Q3
let numbers = [10,20,30,40,50];
let array = numbers.slice(1,4).reverse();
let finalArray = [...numbers.slice(4), ...array, ...numbers.slice(0,1)];
console.log(finalArray);

// Q4
let emails = 'john@example.com, jane.doe@company.com, user123@gmail.com';
let emailArray = emails.split(', ');
let userNames = emailArray.map(email => email.split('@')[0]);
userNames = userNames.join(" ; ");

console.log(userNames);




