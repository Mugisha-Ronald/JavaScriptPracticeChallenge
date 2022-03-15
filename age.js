
let enteredYear = prompt("Please, enter your year of birth ")
const d = new Date()
let year = d.getFullYear();
let ans = year  - enteredYear

if(ans < 18){
    console.log("You are a minor ")
}

else if (ans >= 18 && ans <= 36){
    console.log("You are a youth ")
}

else{
    console.log("You are an elder ")
}



