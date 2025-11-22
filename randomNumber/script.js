// Get references to the 3 labels where random numbers will be displayed
const lab1 = document.getElementById("label1");
const lab2 = document.getElementById("label2");
const lab3 = document.getElementById("label3");

// Get reference to the button that triggers random number generation
const btn = document.getElementById("but");

// Define the minimum and maximum range for random numbers
let min = 50;
let max = 100;

// Variable to store the generated random number
let randNo;

// When the button is clicked, generate new random numbers for each label
btn.onclick = function () {

    // Generate random number for label 1
    randNo = Math.floor(Math.random() * (max - min + 1)) + min;
    lab1.innerHTML = randNo;

    // Generate random number for label 2
    randNo = Math.floor(Math.random() * (max - min + 1)) + min;
    lab2.innerHTML = randNo;

    // Generate random number for label 3
    randNo = Math.floor(Math.random() * (max - min + 1)) + min;
    lab3.innerHTML = randNo;
};
