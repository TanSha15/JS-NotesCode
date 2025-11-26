cb = document.getElementById("cb");

vc = document.getElementById("vc");
mc = document.getElementById("mc");
ac = document.getElementById("ac");

but = document.getElementById("but");

subinfo = document.getElementById("subinfo");
payinfo = document.getElementById("payinfo");

but.onclick = function(){

    if(cb.checked){
        subinfo.innerText = "You are subcribed";
    }
    else{
        subinfo.innerText = "You are NOT! subcribed";
    }

    if(vc.checked){
        payinfo.innerText = "paying via VisaCard";
    }
    else if(mc.checked){
        payinfo.innerText = "paying via MasterCard";
    }
    else if(ac.checked){
        payinfo.innerText = "paying via AmericanCard";
    }
    else{
        payinfo.innerText = "NO! card selected";
    }
}