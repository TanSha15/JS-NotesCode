const PI = 3.14 //const taki koi bhi value change na kar payein

mybutton = document.getElementById("sub");

mybutton.onclick = function(){

    let radi;
    radi = document.getElementById("rad").value;

    let cum = 2 * PI * radi;
    document.getElementById("ans").innerText = `Circumfrance: ${cum}`;
}
