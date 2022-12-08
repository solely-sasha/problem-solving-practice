//        cHALLENGE 1
//  -----------------------------------------------------------------------------------------

//  1.   understand the problem
//     -----------------------------------------------------------------------------------------
//       write a function that takes an array of numbers and returns the largest
//       the parameter is an array of numbers and the output will be the largest number in that array
//      -----------------------------------------------------------------------------------------------
//  2.   Make a plan 
//      ---------------------------------------------------------------------------------------------
//       use a for loop to loop over the numbers and find the largest number
//      -----------------------------------------------------------------------------------------------
//  3.   implement the plan
//      -------------------------------------------------------------------------------------------

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


//  4   review
//     -----------------------------------------------
//      console.log(largest([4, 54, 28, 19, 23, 5, 6]))
        console.log(largest([36, 8, 40, 13, 9]))


//     ----------------------------CHALLENGE 2 -----------------------------------------------------------------

//      Write a function that takes an array of words and a character and returns each word that has that character present.
// 1.   understand the problem
//    -------------------------------------------------------------------------------------------------------------------------
//      write a function that has 2 parameters; one is an array of words and one is a character so when the function is 
//      is called, it will return all of the words from the array that contain the specified character. 
//     -------------------------------------------------------------------------------------------------------------------------
// 2.   Make a plan
//    ------------------------------------------------------------------------------------------------------------------------------
//      start with a function and name the variables for the array and character parameters. Decide which array method 
//      can be used to loop through the array and find the character, but also return the words that include that character.
//      Possibly just filter. 
//      --------------------------------------------------------------------------------------------------------------------------
//  3.  Implement the plan
//     -------------------------------------------------------------------------------------------------
//    1st attempt using filter()

function lettersWithStrings(array, character){

filteredCharacters = array.filter(word => word.includes(character))
    return filteredCharacters;


}

//   4. Review
//     ----------------------------------------------------------

console.log(lettersWithStrings(["$omething", "W0rd", "Hi!", "$a$ha", ],"$" ))


// ......................... CHALLENGE 3 ------------------------------------------------------------------------------

//   Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

//  1. Understand the problem
//     ---------------------------------------------------------------------------------------------------------
//      a function will take 2 numbers as parameters and when called the output will be true if the first number is 
//      divisible by the second number and false if it is not
//     -------------------------------------------------------------------------------------------------------------------
//  2. Make a plan
//     --------------------------------------------------------------------------------------------------------------------
//     write a function, give it paramaters num1 and num2, write a conditional statement for if num1 is divisible 
//     by num2 return true, else false. 
//     ------------------------------------------------------------------------------------------------------------------------
//  3. Implement the plan
//     ---------------------------------------------------------------------------------------------------------------------

    function isDivisible(num1, num2){

       return  num1 % num2 === 0 ? "true": "false";
    

    }

// 4. Review
//    --------------------------------------------------------------------------------------------------------------------

console.log(isDivisible(4, 2))
console.log(isDivisible(9, 3))
console.log(isDivisible(15, 4))