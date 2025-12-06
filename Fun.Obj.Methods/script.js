console.log("Hello world");
console.log("What are you doing?");

// var name = "Tanish";
// console.log(`Hello ${name}`);

// console.log(typeof name);


// window.alert("Please recheck your entry");
// window.alert("Ok it is done")

// document.getElementById("myh1").textContent="THIS IS H1 TAG"

// let name = "Tanish"
// let age = 21;
// let isEnrolled = true;

// document.getElementById("p1").textContent=`My name is ${name}`;
// document.getElementById("p2").textContent=`I m ${age} years old`;
// document.getElementById("p3").textContent=`status:${isEnrolled}`;

//FILTER METHODE

let age = [23,11,45,33,5,67,18];
let newage = age.filter(agevalid);

function agevalid(element){
    if(element>18){
        return element
    }
}

console.log(newage);


let fruits = ["banana","apple","orange","pomegranate","oldmonk13years"]

let validfruits = fruits.filter(validfr);

function validfr(element){
    if(element.length>6){
        return element;
    }
}

console.log(validfruits);

//REDUCE METHODE

let marks = [12,10,25,45,55];

let total = marks.reduce(sum);

function sum(accu , ele){
    return accu+ele;
}

console.log(`Total marks:${total}`);


//FUNCTION EXPRESSION

let num = [1,2,3,4,5];

let cubes= num.map(function(element){

    return Math.pow(element,3);

});



console.log(cubes);


//ARROW FUCNTION

let hello = (name,age)=>{
    console.log(`Hello ${name} and you are ${age} years old`)
}

hello("Tanish",21);


let cube3 = [1,2,3,4,5];

let solution = cube3.map((element)=>{
    return Math.pow(element,3)
}) 

console.log("solution of cube:")
console.log(solution);


//JAVASCRIPT OBJECTS

const person1 = {
    firstName:"Tanish",
    lastName:"Sharma",
    age:42,
    isEmployed: false,
    sayHello: ()=>{
        console.log(`Hey I am Tanish!`)
    },
    empstat:function(){                              //THIS KEYWORD (DOSNT WORK WITH ARROW FUNCTION)
        console.log(`Employment status:${this.isEmployed}`)
    }
};

console.log(person1.firstName);
person1.sayHello();
person1.empstat();

//CONSTRUCTORS

function car(Make,model,year){
    this.Make = Make,
    this.model = model,
    this.year = year

    this.drive = function drive(){
        console.log(`You drive a ${this.Make}`);
    }
};

let car1 = new car("Ford","chevy","2020");
let car2 = new car("Honda","Civic","2222");

console.log(car1.Make)
car1.drive();


//CLASSES IN JS

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Your Product is: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    aftersales(taxper){
        let final_price = (this.price)+(this.price*taxper);
        console.log(`Final Price after Tax:${final_price}`);
    }
}


let pro1 = new Product("Shirt",100.0);
let pro2 = new Product("Underware",200);

pro2.displayProduct();
pro2.aftersales(0.05);


//SORT()

let fruits1 = ["apple","orange",'banana','dogfood'];
fruits1.sort();
console.log(fruits1); //sorts element in lexographical manner


let numTable = [3,2,5,7,1];

//IN ASCENDING ORDER
numTable.sort((a,b)=>a-b);
console.log(numTable);

//IN DECENDING ORDER
numTable.sort((a,b)=>b-a);
console.log(numTable);

const people =[
    {name:"Tanish",gpa:3.4,age:27},
    {name:"saubhagay",gpa:4.1,age:20},
    {name:"veer",gpa:1.1,age:35}
] //array of objects


people.sort((a, b) => a.gpa - b.gpa);
console.log("After GPA sort:", people);

people.sort((a, b) => a.age - b.age);
console.log("After Age sort:", people);


//SHUFFLING OF ARRAY

const card = ['A',1,2,3,4,5,6,7,8,9,10,'K','Q','J'];

for(let i = card.length-1;i>=0;i--){
    let rand = Math.floor(Math.random()*(i+1));
    [card[i],card[rand]] = [card[rand],card[i]]; //DESTRUCTRING
}

console.log(card);


//DATE

const date = new Date();

console.log(date)


const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
console.log(hour+":"+min+":"+sec);


//CLOSURE PROPERTIES

function createGame() {
    let score = 0;  //it protects the score variable by privatizing it

    function increaseScore(points) {
        score += points;
    }

    function decreaseScore(points) {  
        score -= points;
    }

    function displayScore() {
        return score;
    }

    return {
        increaseScore,
        decreaseScore,
        displayScore
    };
}

let game = createGame();

game.increaseScore(5);
game.decreaseScore(2);   
game.increaseScore(11);

console.log(`Final Score: ${game.displayScore()}`);


//SET TIMEOUT


function sayHello(){
    window.alert("hello");
}

//CALLBACK FUNCTION

//synchronous=> line of code that executes line by line

//asynchromous=> doesn't wait for line of code will execute nxt code
//can create problem and answer might not come out consistent
//handliing methode=> promises,callback,async/await


//eg.



function func1(callBack) {
    setTimeout(() => {
        console.log("task 1");
        callBack();
    }, 10);
}

function func2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);



//ERROR HANDLING

try{
    let divedend = Number(window.prompt("Enter the divedend"));
    let divisor = Number(window.prompt("Enter the divisor"));

    if(divisor==0){
        throw new Error("You cant divide by zero");
    }
    if(isNaN(divedend) || isNaN(divisor)){
        throw new Error("Enter the number")
    }
    console.log(`Answer:${divedend/divisor}`);
}
catch(error){
    console.error(error);
}
console.log("End of programme");




















