// functions ----- recieves parameters, returns value

/* const calculateTax = function(price, rate){
    return price * rate;
} */
/* const calculateTax = (price, rate) => {
    return price * rate;
} */
const calculateTax = (price, rate) => price * rate;

tax01 = calculateTax(100, 0.05);
console.log(tax01);

/* tax01 = calculateTax(100, 0.05);
tax02 = calculateTax(1000, 0.15);
console.log(tax01, tax02);
function calculateTax(price, rate){
    return price * rate;
} */

/* x = sum(11,33);
console.log(x);
function sum(a, b){
    //console.log(a + b);
    return a + b;
} */

/* x = myFn();
console.log(myFn());
function myFn(){
    return "good night";
} */


/* sumTheseNumbers([1111, 5555]);
sumTheseNumbers([1, 3, 5, 7, 6]);
sumTheseNumbers([5, 7, 9]);

function sumTheseNumbers(numbers){
    sum = 0;
    for(i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    console.log(sum);
} */


/* sumTheseNumbers(1111, 5555);
sumTheseNumbers(1, 3, 5, 7, 6);
sumTheseNumbers(5, 7, 9);

function sumTheseNumbers(...numbers){
    sum = 0;
    for(i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    console.log(sum);
} */


/* myFn(11, 22, "Tamer");
function myFn(w, e, s){
    console.log("total of ", s , " = ", w + e);
}
myFn(100, 200, "Dalia"); */

/* myFn();
function myFn(){
    console.log("hi from function");
}
myFn(); */

// object (associative array)
/* students = [
    {firstName: "Samy", age: 15, scores: {arabic: 35, english: 77}},
    {firstName: "Fathy", age: 16, scores: {arabic: 85, english: 55}},
    {firstName: "Ashraf", age: 14, scores: {arabic: 44, english: 66}},
];

console.log(students[1].scores.english); */

/* student = {
    firstName: "Tamer",
    lastName: "Waleed",
    age: 13,
    hasPassed: false,
    scores: [33, 55, 77]
}
console.log(student.age, student.firstName, student.scores[1]); */


//arrays
/* x = [11, 22, 33, 44, 55];
countXItems = x.length;
for(i = 0; i < countXItems; i++){
    console.log(x[i]);
} */

//console.log(countXItems);

/* x = [11, true, 22.5, "hi", 55];
//x[0] = "start here";
//x[5] = 100;
//x[13] = 77;
//x.push(10000);

y = [10000, ...x, -33, -99];
console.log(y); */



// loops

/* sum = 0;
for(i = 1; i <= 5; i++){
    sum += i; //sum = sum + i;
}
console.log(sum); */


/* total = 100;
x1 = 7;
x2 = 11;
x3 = 15;

for(z1 = 1; z1 <= 14; z1++){
    for(z2 = 1; z2 <= 9; z2++){
        for(z3 = 1; z3 <= 6; z3++){
            cart = x1 * z1 + x2 * z2 + x3 * z3;
            if(cart == total){
                console.log("x1=", z1, " x2=", z2, " x3=", z3);
            }
        }
    }
} */

/* for(x = 2; x <= 5; x++){
    for(y = x; y <= 12; y++){
        console.log(x, " * ", y, " = ", x * y);
    }
    console.log("-----------------------------------");
} */


/* for(i = 7; i <= 1000; i += 7){
    if(i%2==1 && i%3==1 && i%4==1 && i%5==1 && i%6==1){
        console.log(i);
    }
} */



/* for(i = 18; i >= 3; i -= 3) {
    console.log(i);
} */

/* x = 10;
x %= 5 //x = x + 5;

console.log(x); */

/* x = 5;
console.log(++x);
console.log(x); */

/* age = 17;

if(age >= 18) {
    console.log("high schools");
}
else if(age >= 15) {
    console.log("mid schools");
}
else {
    console.log("preperation schools");
} */

/* if(age < 15) {
    console.log("preperation schools");
}
else if(age < 18) {
    console.log("mid schools");
}
else {
    console.log("high schools");
} */


/* salary = 1999;
job = "acc";
branch = "alex";

if(branch == "tanta" && (salary < 2000 || job == "acc")) {      //   &&  and           || or
    console.log("get benfit");
}
else {
    console.log("no benfit");
} */

/* a = 11;

if(a === "11") {
    console.log("goood");
}
else {
    console.log("bad");
} */

/* z = 45;
if(z >= 50) {           // logic operators >   <   >=   <=   == ===   !=   !==
    console.log("pass");
}
else {
    console.log("fail");
} */


/* x = false;
if(!x){  // boolean variable
    // true
    console.log("good");
}
else {
    // false
    console.log("bad");
} */


// string slice

/* let text = "Hello wOrld!";
let result = text.slice(4, 12);

console.log(text.toLowerCase()); */

// string interpolation 

/* fullName = "Reda Ali";

welcomeMassage = `welcome ${fullName} in our class`;
x = "welcome " + fullName + " in our class";

console.log(x); */

// string

/* a = "good";
b = "night";

console.log('It\'s alright'); */

// Math
/* a = 13;
b = 10;
c = a % b;  // + - * / %   ( )

x = (8 + 4) / (2 + 4);

piii = Math.PI;
y = Math.pow(2,3);

console.log(Math.round(-2.6)); */

//console.log("2023 has been passed, Hello 2024");