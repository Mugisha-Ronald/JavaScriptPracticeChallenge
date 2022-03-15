function myArray(arr){
    let even = []
    let odd = []
    let char = []
    for (let counter=0; counter <= arr.length -1; counter ++){
        if (arr[counter] % 2 == 0 ){
            
            even.push(arr[counter])
            even.sort(function(a, b) {
                return a - b;
              });
            
        }

        else if(arr[counter] % 2 == 1 ){
            
            odd.push(arr[counter])
            // sorting numerically
            odd.sort(function(a, b) {
                return a - b;
              });
            
        }
        else{
            char.push(arr[counter])
            char.sort() // sort() function just sorts alphabetically
        }
    } 
    // console.log(even)
    // console.log(odd)
    // console.log(char.sort())

    // return(
    //     {
    //         'evens' : even,
    //         'odds' : odd,
    //         'chars' : char
    //     }
    // )

    console.log(
        {
            'evens' : even,
            'odds' : odd,
            'chars' : char
        }
    )

}

let someArray = [3.0,'a',7,'x',20,'d',4,'f',8]

myArray(someArray)
// console.log(myArray(someArray))



