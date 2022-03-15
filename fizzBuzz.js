
function fizzBuzz(stringOne, stringTwo){
    let theLength = stringOne.length + stringTwo.length

    if (theLength % 5 == 0 && theLength % 3 == 0){
        return('FizzBuzz')
    }

    else if (theLength % 3 == 0){
        return('Fizz')
    }

    else if (theLength % 5 == 0){
        return('Buzz')
    }

    else{
        return(`${theLength} is neither divisible by 5 nor 3`)
    }
}

console.log(fizzBuzz('ronald','shabahran')) // divisible by both 3 and 5
// console.log(fizzBuzz('ron','sha')) // divisible by 3
// console.log(fizzBuzz('ronald','shab')) // divisible by 5
// console.log(fizzBuzz('ronald','shabahranxi')) // not divisible by either 5 or 3
