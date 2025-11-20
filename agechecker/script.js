// Access the submit button
const btn = document.getElementById("btn");

// Add click event listener
btn.onclick = function () {
    // Get age value from input field
    let age = document.getElementById("data").value;

    // Convert input to number (prevents string comparison)
    age = Number(age);

    // Validate input: check if age is between 0 and 100
    if (age < 0 || age > 100 || isNaN(age)) {
        document.getElementById("out").innerText = `Enter a valid age`;
    }
    // Check if user is eligible (greater than 18)
    else if (age > 18) {
        document.getElementById("out").innerText = `You are eligible`;
    }
    // Otherwise, user is underage
    else {
        document.getElementById("out").innerText = `You are under age`;
    }
};
