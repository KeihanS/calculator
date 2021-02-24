"use strict";

function getInput(user_input) {
  let input = user_input.value;
  if (Number.isInteger(Number(input))) {
    document.getElementById("display-input").innerHTML += input;
    console.log("yes");
  } else if (input === "+" || input === "-" || input === "x" || input === "÷") {
    document.getElementById("display-input").innerHTML += input;
    console.log("yes");
  } else if (input === "=") {
    let value = document.getElementById("display-input").textContent;
    
    let array = value.split(/[+,—,x,÷]+/);
    
    const regex = /x/;
    const regex1 = /÷/;
    const regex2 = /-/;
    let result = 0;
    let firstN = Number(array[0])
    let secondN = Number(array[1])
    if (regex.test(value)){
        result = firstN * secondN;
    }
    else if(regex1.test(value)){
        result = firstN / secondN;
    }
    else if(regex2.test(value)){
        result = firstN - secondN;
        console.log(firstN, secondN, result)
    }
    else{
        result = firstN + secondN;
    }
    document.getElementById("display-input").innerHTML = result;

  } else if (input === "ce") {
    let remove_lastchar = document.getElementById("display-input").textContent;
    document.getElementById("display-input").innerHTML = "";
    document.getElementById("display-input").innerHTML = remove_lastchar.slice(0,-1);
  }else{
    document.getElementById("display-input").innerHTML = "";
    document.getElementById("main").style.backgroundColor= "#1b263b";
  }

}
