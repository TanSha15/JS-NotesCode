//Easy methode

/*let username;
username = window.prompt("Enter your name");
console.log(`Hello ${username}`);*/

//Proffesional methode

let username2;

document.getElementById("btn").onclick = function () {
    username2=document.getElementById("name").value;
    console.log(`Username:${username2}`)
}

