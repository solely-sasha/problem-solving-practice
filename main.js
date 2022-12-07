//  1. understand the problem
//

// write a function that takes an array of numbers and returns the largest
// the parameter is an array of numbers and the output will be the largest number in that array
// use a for loop to loop over the numbers and find the largest number



//  3. implement the plan

function largest(array) {
  
    let highestNum = array[0];
    for (var i = 0; i < array.length; i++){
        let currentNum = array[i]
        if(currentNum > highestNum){
            highestNum = currentNum;
            return highestNum;
            
        }
    }


}


//  4  review
// console.log(largest([4, 54, 28, 19, 23, 5, 6]))
console.log(largest([36, 8, 40, 13, 9]))
