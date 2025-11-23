mybox = document.getElementById("myBox")

mybox.addEventListener("click",event =>{
    event.target.style.backgroundColor = "Tomato";
    event.target.textContent = "OUCH!!🥲"
})

mybox.addEventListener("mouseover",event=>{
    event.target.style.backgroundColor = "Yellow";
    event.target.textContent = "Don't do it!🥺";
})


mybox.addEventListener("mouseout",event=>{
    event.target.style.backgroundColor = "limegreen";
    event.target.textContent = "Click Me!😊"
})