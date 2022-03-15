
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
}

console.log(fizzBuzz('ronald','shabahran'))
// console.log(fizzBuzz('ron','sha'))
// console.log(fizzBuzz('ronald','shab'))
